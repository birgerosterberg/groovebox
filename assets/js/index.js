/**
 * Music player for buttons onclick functionality
 */
// Function to play the reggae music
function playMusic(musicId) {
    let toggleMusic = document.getElementById(musicId);
    return toggleMusic.paused ? toggleMusic.play() : toggleMusic.pause();

}

// Onclick audio function, takes the data-key from the audio and adds it when clicked fron the onclick function
function clickPlay(audioIn) {
    const audio = document.querySelector(`audio[data-key="${audioIn}"]`);
    const currentKey = document.getElementById('key-press');
    const soundNameElement = document.getElementById('sound-played');
    if(audio) {
        audio.play();
        const soundName = audio.getAttribute('data-name');
        currentKey.innerHTML = `You clicked!`;
        soundNameElement.innerHTML = soundName;
    }
    audio.play();
}

// Volume Slider function




// Keydown functions! Takes the data-keyCode info and makes sure it plays the right sound!
function keyPlay(event) {
    const currentKey = document.getElementById('key-press');
    const soundNameElement = document.getElementById('sound-played');
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    // If statement to make sure its all correct and no errors is displayed.
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


// 
//    Trying to get this sequencer to work!
//  

const sequencers = document.getElementsByClassName('sequencer');

for (let i = 0; i < sequencers.length; i++) {
    sequencers[i].addEventListener('click', sequenceMe);
  }

function sequenceMe() { 
    console.log('clicked my boxes yo!');
}