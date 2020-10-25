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

// mobile request
$(document).ready(function () {
    $('.mobile-request').click(function (event) {
        $('.mobile-signup-block').addClass('active');
        $('.mobile-block__container').hide();
    });
});