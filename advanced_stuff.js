document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash || "#home";
    window.location.hash = hash;

    const defaultSection = document.querySelector(hash);
    defaultSection?.scrollIntoView();
});

function playSound(soundType) {
    const sounds = {
        select: 'select.ogg',
        confirm: 'confirm.ogg'
    };

    const audio = new Audio(sounds[soundType]);
    audio.play();
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            playSound('confirm');
            window.location.href = link.getAttribute('href');
        });
    });
});
