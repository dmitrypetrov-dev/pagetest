//video sound

(function () {
    let video = document.getElementById("phonevideo");
    video.addEventListener("click", () => {
        event.target.muted = !event.target.muted;
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
