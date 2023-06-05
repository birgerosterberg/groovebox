// Page Tabs!

function changeTab(tabIndex) {
    const tabs = document.getElementsByClassName('tab');
    const contents = document.getElementsByClassName('content');
  
    // Remove "tabActive" class from all tabs and contents
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('tabActive');
      contents[i].classList.remove('tabActive');
    }
  
    // Add "tabActive" class to the selected tab and content
    tabs[tabIndex].classList.add('tabActive');
    contents[tabIndex].classList.add('tabActive');
  }
  changeTab(4); // Make sure the initial tab is the How To Tab!

   
  let currentMusic = null; // Variable to transfer what is currently playing from the playMusic function used for volume change!
  let currentLoop = null; // keeping track of the current loop!
  /**
 * Music player for buttons onclick functionality
 */
function playMusic(event, musicId) {
    let toggleMusic = document.getElementById(musicId);
    const button = event.target;
    currentLoop = musicId; // Added to try and fix a bugg, still not perfect!
    currentMusic = musicId; // Set whats playing to an external variable!

    if (toggleMusic.paused) {
      toggleMusic.play();
      button.classList.add('bactive'); // Add the "bactive" class when playing
    } else {
      toggleMusic.pause();
      button.classList.remove('bactive'); // Remove the "bactive" class when paused
    }
  }
  // Reset the currentMusic variable so that it can be started again from the beginning!
  function resetLoop() {
    if (currentLoop) {
      let toggleLoop = document.getElementById(currentLoop);
      toggleLoop.currentTime = 0;
    }
  }
let repeatEnabled = false;

function repeatLoop(event, loopId) {
    let toggleLoop = document.getElementById(loopId);
    const button = event.target;
  
    currentLoop = loopId; // Set what's playing to an external variable!
  
    if (!repeatEnabled) {
      toggleLoop.loop = true; // Enable looping
      repeatEnabled = true;
      button.classList.add('bactive'); // Add the "bactive" class when repeat is enabled
    } else {
      toggleLoop.loop = false; // Disable looping
      repeatEnabled = false;
      button.classList.remove('bactive'); // Remove the "bactive" class when repeat is disabled
    }
  }

/**
 * VoluMe functionality for the player!
 */
function changeBckTrkVol(volume) {
    const volumeValue = volume / 100;
    const getMusic = document.getElementById(currentMusic);
  
    if (getMusic) {
      getMusic.volume = volumeValue;
    }
  }

// Volume Slider function, changes all volume!
function updateVolume(volume) {
    const volumeValue = volume / 100;
  
    // Get all audio elements
    const audioElements = document.getElementsByTagName('audio');
  
    // Set the volume for each audio element
    for (let i = 0; i < audioElements.length; i++) {
      audioElements[i].volume = volumeValue;
    }
  }

// Key click play functions

// Onclick audio function, takes the data-key from the audio and adds it when clicked from the onclick function
function clickPlay(event, audioIn) {
    const audio = document.querySelector(`audio[data-key='${audioIn}']`);  // Find the audio element with the corresponding data-key attribute
    const button = event.currentTarget;

    // Get the DOM elements for displaying the current key and sound name
    const currentKey = document.getElementById('key-press');
    const soundNameElement = document.getElementById('sound-played');
  
    if (audio) { 
      audio.play(); // Play the audio if it exists
      const soundName = audio.getAttribute('data-name'); // Get the data-name attribute value of the audio element
      currentKey.innerHTML = `You clicked!`; // Update the current key element with a message
      soundNameElement.innerHTML = soundName; // Update the sound name element with the name of the sound played
      button.classList.add('bactive'); // Add the "bactive" class to the button
  
      // Remove the "bactive" class after a certain duration with a function
      setTimeout(function() {
        button.classList.remove('bactive');
      }, 200);
  
    }
  }

// Add a keydown event listener to the window and call the keyPlay function

window.addEventListener('keydown', keyPlay);

// Keydown functions! Takes the data-keyCode info and makes sure it plays the right sound!

  function keyPlay(event) {
    // Get the DOM elements for displaying the current key and sound name
    const currentKey = document.getElementById('key-press');
    const soundNameElement = document.getElementById('sound-played');
  
    // Find the audio element with the corresponding data-key attribute based on the event's keyCode
    const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
  
    // Find the button element with the corresponding data-key attribute based on the event's keyCode
    const button = document.querySelector(`button[data-key='${event.keyCode}']`);
  
    // If statement to check if an audio element and a button element with the specified data-key exist
    if (audio) {
      audio.play(); // Play the audio if it exists
  
      const soundName = audio.getAttribute('data-name'); // Get the data-name attribute value of the audio element
      currentKey.innerHTML = event.key; // Update the current key element with the pressed key
      soundNameElement.innerHTML = soundName; // Update the sound name element with the name of the sound played
  
      button.classList.add('bactive'); // Add the "bactive" class to the button
  
    // Remove the "bactive" class after a certain duration with a function
    setTimeout(function() {
      button.classList.remove('bactive');
    }, 200);
    } else {
      // Display a message if no audio element or button element with the specified data-key is found
      currentKey.innerHTML = `Sorry ${event.key} is not used`;
      soundNameElement.innerHTML = `Sorry ${event.key} doesn't have a sound`;
    }
  }

// 
//    Trying to get this sequencer to work!
//  

const sequencers = document.querySelectorAll('.sequencer'); // selects all the elements with the class name of sequencer.
const playButton = document.getElementById('play-btn'); // selects the play button
const kickSound = document.getElementById('kick-sound'); // Adds the sound that i want to use!  (ToDo: Make it reusable for other sounds and more sequencers!!)
let isPlaying = false; // Using boolean false to not make it play!
let currentStep = 0; // Make sure it starts at step 0(1)!

// Add event listeners to sequencer
sequencers.forEach((sequencer) => {
  sequencer.addEventListener('click', toggleSequencer);
});

// Add event listener to play button
playButton.addEventListener('click', togglePlayback);

function toggleSequencer() {
  this.classList.toggle('bactive');   // Toggle the 'active' class on the sequencer
  // this.style.backgroundColor = this.classList.contains('bactive') ? 'green' : '#eaeaea'; // Update the background color based on the 'active' class
}

function togglePlayback() {
  // Toggle the playback 
  isPlaying = !isPlaying;

  if (isPlaying) {
    playButton.textContent = 'Pause'; // Changes the text to Pause if its playing
    currentStep = 0; // Make sure it always starts from Step 0(1)
    playActiveSequencers();
  } else {
    playButton.textContent = 'Play'; // Changes the text to play if its paused
  }
}

// this part of the code checks if the sequencer at the current step is active and plays the kick sound
function playActiveSequencers() {
  // Iterates over the sequencer and checks if it is active or not!
  sequencers.forEach((sequencer, i) => {
    if (i === currentStep && sequencer.classList.contains('bactive')) {
      // Play the kick sound for the active part! ToDO (Make this reusable for other sounds!)
      kickSound.play();
      // Need to find out how to make it add this on steps that aint active also...
      sequencer.style.opacity = '0.5'; // Change opacity to the step playing.
    } else {
        sequencer.style.opacity = '1' // Change back opacity...
    }
  });

  // Move to the next step in the sequencer loop
  currentStep = (currentStep + 1) % sequencers.length;

  if (isPlaying) {
    setTimeout(playActiveSequencers, 200); // Add a delay between each step ToDo: (add choices to change the BPM!)
  }
}