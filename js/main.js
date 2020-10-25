//video sound

(function () {
    let label = document.getElementById("phone__label-img");
    let video = document.getElementById("phonevideo");
    video.addEventListener("click", () => {
        event.target.muted = !event.target.muted;
        if (event.target.muted === true) {
            label.src = 'img/mute-label-2.png';
        } else {
            label.src = 'img/mute-label-1.png';
        }
    });
})();


// form submit

$(document).ready(function () {
    $('.gform').submit(function (event) {
        $('.gform').css('display', 'none');
        $('.countdown').css('display', 'flex');

        const time = $('.countdown__number');
        intervalId = setInterval(timerDecrement, 1000);

        function timerDecrement() {
            const newTime = time.text() - 1;
            time.text(newTime);
            if (newTime === 0) {
                clearInterval(intervalId);
                $('.countdown').css('display', 'none');
                $('.accepted').css('display', 'flex');
            }
        }
    });
});

// mobile request and close
$(document).ready(function () {
    $('.mobile-request').click(function (event) {
        $('.mobile-signup-block').addClass('active');
        $('.mobile-block__container').hide();
    });
    $('.mobile-close').click(function (event) {
        $('.mobile-signup-block').removeClass('active');
        $('.mobile-block__container').show();
    });
});

// mobile form submit

$(document).ready(function () {
    $('.mobile-gform').submit(function (event) {
        $('.mobile-gform').css('display', 'none');
        $('.mobile-countdown').addClass('active');

        const mobileTime = $('.mobile-countdown__number');
        mobileIntervalId = setInterval(timerDecrement, 1000);

        function timerDecrement() {
            const newMobileTime = mobileTime.text() - 1;
            mobileTime.text(newMobileTime);
            if (newMobileTime === 0) {
                clearInterval(mobileIntervalId);
                $('.mobile-countdown').removeClass('active');
                $('.mobile-accepted').addClass('active');
            }
        }
    });
});