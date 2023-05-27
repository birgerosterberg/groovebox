/**
 * Music player for buttons onclick functionality
 */
// Function to play the reggae music
function playReggae() {
    let toggleMusic = document.getElementById('reggae');

    return toggleMusic.paused ? toggleMusic.play() : toggleMusic.pause();
}

// Onclick Kick function
function kick() {
    let kick = document.getElementById('kick');
    kick.play();
}

// Keydown functions!
function padPlay(event) {
    console.log(event.key)
    
}
window.addEventListener('keydown', padPlay);
