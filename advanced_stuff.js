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

document.addEventListener('DOMContentLoaded', function() {
    const endScroll = 50;
    const initialMargin = 8;
    const widthOffset = 15.5;
    const initialBorderRadius = 5;

    const navbar = document.querySelector('.navbarbg');

    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('scroll', function() {
            const scrollPosition = section.scrollTop;
            const progress = Math.min(Math.max(scrollPosition / endScroll, 0), 1);

            const newMargin = `${(1 - progress) * initialMargin}px`;
            const newWidth = `calc(100% - ${widthOffset * (1 - progress)}px)`;
            const newBorderRadius = `${(1 - progress) * initialBorderRadius}px`;

            navbar.style.margin = `${newMargin} auto`;
            navbar.style.width = newWidth;
            navbar.style.borderRadius = newBorderRadius;
        });
    });
});