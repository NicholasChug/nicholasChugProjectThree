// TO DO
// Do stretch goals
// Maybe: organize into cntdwnApp object

const cntdwnApp = {};

$(document).ready(function() {

    let $countDownDate;

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

    $('.firstForm').on('submit', function(e) {
        e.preventDefault();

        $countDownDate = new Date($(`#dateText`).val()).getTime();

        $(`.dateText`).val('');

        $(`.offButtonArea`).html(`<input type='submit' class='offButton' value='Stop Timer'>`);

        const timer = setInterval(function () {

            let $timerTitle = $('#titleText').val();
            $('.titleText').html(`<h2>${$timerTitle}</h2>`);
        
            const nowDate = new Date().getTime();

            const difference = $countDownDate - nowDate;

            differenceCalculator($countDownDate, difference);

        }, 1000);

        $('.offButton').on('click', function () {
            clearInterval(timer);
        })
    });
    
});