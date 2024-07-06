// Function to play sound
function playSound(soundType) {
    var audio = new Audio();
    if (soundType === 'select') {
        audio.src = 'select.ogg';
    } else if (soundType === 'confirm') {
        audio.src = 'confirm.ogg';
    }
    audio.play();
}

// Play confirm sound on click of navbar button
document.addEventListener('DOMContentLoaded', function() {
    var navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default navigation
            playSound('confirm');
            // Optionally, navigate to the link after playing the sound
            var href = link.getAttribute('href');
            setTimeout(function() {
                window.location.href = href;
            }, 1000); // Delay navigation for 1 second after sound finishes
        });
    });
});
