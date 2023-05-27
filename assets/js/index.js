/**
 * Music player for buttons onclick functionality
 */
// Function to play the reggae music
function playReggae(musicId) {
    let toggleMusic = document.getElementById(musicId);

    return toggleMusic.paused ? toggleMusic.play() : toggleMusic.pause();
}

// Onclick audio function, takes the data-key from the audio and adds it when clicked fron the onclick function
function clickPlay(audioIn) {
    const audio = document.querySelector(`audio[data-key="${audioIn}"]`);
    audio.play();
}


// Keydown functions! Takes the data-keyCode info and makes sure it plays the right sound!
function keyPlay(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    console.log(event.keyCode);
    audio.play();
}
window.addEventListener('keydown', keyPlay);
