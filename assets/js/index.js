/**
 * Music player for buttons onclick functionality
 */
// Function to play the reggae music
function playMusic(musicId) {
    let toggleMusic = document.getElementById(musicId);
    audio.currentTime = 0;
    return toggleMusic.paused ? toggleMusic.play() : toggleMusic.pause();
}

// Onclick audio function, takes the data-key from the audio and adds it when clicked fron the onclick function
function clickPlay(audioIn) {
    const audio = document.querySelector(`audio[data-key="${audioIn}"]`);
    audio.play();
}


// Keydown functions! Takes the data-keyCode info and makes sure it plays the right sound!
function keyPlay(event) {
    const currentKey = document.getElementById('key-press');
    const soundNameElement = document.getElementById('sound-played');
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    
    if(audio) {
    audio.play();
    const soundName = audio.getAttribute('data-name');
    currentKey.innerHTML = event.key;
    soundNameElement.innerHTML = soundName;

    } else {
        currentKey.innerHTML = `Sorry ${event.key} is not used`;
        soundNameElement.innerHTML = `Sorry ${event.key} dont have a sound`;
    }
}
window.addEventListener('keydown', keyPlay);
