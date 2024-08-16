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

    function isMobile() {
        return /Mobi/i.test(navigator.userAgent);
    }
    
    if (soundType === 'select' && isMobile()) {
        return;
    }

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

document.addEventListener('DOMContentLoaded', () => {
    const endScroll = 50;
    const initialMargin = 8;
    const widthOffset = 15.5;
    const initialBorderRadius = 5;

    const navbar = document.querySelector('.navbarbg');

    document.querySelectorAll('section').forEach(section => {
        section.addEventListener('scroll', () => {
            const progress = Math.min(Math.max(section.scrollTop / endScroll, 0), 1);

            navbar.style.margin = `${(1 - progress) * initialMargin}px auto`;
            navbar.style.width = `calc(100% - ${widthOffset * (1 - progress)}px)`;
            navbar.style.borderRadius = `${(1 - progress) * initialBorderRadius}px`;
        });
    });
});