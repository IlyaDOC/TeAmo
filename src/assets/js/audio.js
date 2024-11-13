document.addEventListener("DOMContentLoaded", function () {
    musicPlayerClickHandler();
})

function musicPlayerClickHandler() {
    const audioButtons = document.querySelectorAll('.playlist__items .playlist__item .actions__button');

    if (audioButtons && audioButtons.length > 0) {
        audioButtons.forEach((audioButton) => {
            audioButton.addEventListener('click', function () {
                const currentAudio = audioButton.parentElement.previousElementSibling;

                audioButtons.forEach(item => {
                    const audio = item.parentElement.previousElementSibling;
                    if (audio !== currentAudio) {
                        audio.pause();
                        audio.currentTime = 0; // Сброс времени воспроизведения
                        item.classList.remove('play');
                        item.nextElementSibling.classList.remove('animate');
                    }
                });

                if (audioButton.classList.contains('play')) {
                    audioButton.classList.remove('play');
                    currentAudio.pause();
                    audioButton.nextElementSibling.classList.remove('animate');
                } else {
                    audioButton.classList.add('play');
                    currentAudio.play();
                    audioButton.nextElementSibling.classList.add('animate');
                }
            });
        });
    }
}
