// HackerYou Project #3 - Nicholas Chug

// Document ready function 
$(document).ready(function() {

    // Global variable countDownDate created which is to be used in the event listener
    let $countDownDate;

    // differenceCalculator function created to calculate the difference in time between a user created date and the present date upon form submission
    const differenceCalculator = function (createdDate, differenceInTime) {
        if (isNaN(createdDate)) {
            $(`.timeUntil`).html(`<p>Please enter a correct date!</p>`);
        } else if (differenceInTime > 0) {
            let days = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
            let hours = Math.floor((differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((differenceInTime % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((differenceInTime % (1000 * 60)) / 1000);
            $(`.timeUntil`).html(`<p>The time until is: ${days}d, ${hours}h, ${minutes}m, ${seconds}s</p>`);
        } else {
            $(`.timeUntil`).html(`<p>The countdown is over!</p>`);
            $(`.timerOn`).toggleClass(`timerOff`);
        };
    };

    // Even listener attached to the first form, which will be called upon submit
    $('.firstForm').on('submit', function(e) {
        e.preventDefault();

        // Previously created Global Variable now called to store today's date and time
        $countDownDate = new Date($(`#dateText`).val()).getTime();

        // Upon form submission, date text is emptied for accessibility
        $(`.dateText`).val('');

        // Timer off button created dynamically 
        $(`.offButtonArea`).html(`<input type='submit' class='offButton' value='Stop Timer'>`);

        // Interval timer attached to the users created date runs function differenceCalculator every second to display an active timer countdown
        const timer = setInterval(function () {

            let $timerTitle = $('#titleText').val();
            $('.titleText').html(`<h2>${$timerTitle}</h2>`);
        
            const nowDate = new Date().getTime();

            const difference = $countDownDate - nowDate;

            differenceCalculator($countDownDate, difference);

        }, 1000);

        // Off button event listener used to stop the timer countdown upon users click
        $('.offButton').on('click', function () {
            clearInterval(timer);
        })
    });
    
});