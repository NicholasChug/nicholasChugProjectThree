// TO DO
// Do stretch goals

$(document).ready(function() {

    let $countDownDate;
    let $userCreatedDate1;
    let $userCreatedDate2;

    $('.firstForm').on('submit', function(e) {

        e.preventDefault();

        $countDownDate = new Date($(`#dateText`).val()).getTime();

        const timer = setInterval(function () {

            let $timerTitle = $('#titleText').val();
            $('.titleText').html(`<h2>${$timerTitle}</h2>`);
        
            const nowDate = new Date().getTime();

            const difference = $countDownDate - nowDate;

            differenceCalculator(difference);

        }, 1000);

        const differenceCalculator = function(differenceInTime) {
            if (differenceInTime > 0) {
                let days = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
                let hours = Math.floor((differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((differenceInTime % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((differenceInTime % (1000 * 60)) / 1000);
                $(`.timeUntil`).html(`<p>The time until is: ${days}d, ${hours}h, ${minutes}m, ${seconds}s</p>`);
            } else {
                $(`.timeUntil`).html(`<p>The countdown is over!</p>`);
            };
        };

    });

});