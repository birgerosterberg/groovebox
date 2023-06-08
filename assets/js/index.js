// Page Tabs!

function changeTab(tabIndex) {
  const tabs = document.getElementsByClassName("tab");
  const contents = document.getElementsByClassName("content");

  // Remove "tabActive" class from all tabs and contents
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("tabActive");
    contents[i].classList.remove("tabActive");
  }

  // Add "tabActive" class to the selected tab and content
  tabs[tabIndex].classList.add("tabActive");
  contents[tabIndex].classList.add("tabActive");
}
changeTab(0); // Make sure the initial tab is the How To Tab!

let currentMusic = null; // Variable to transfer what is currently playing from the playMusic function used for volume change!
let currentLoops = {}; // Object to store the currently playing loops
let repeatEnabled = {}; // Object to store the repeat status for each loop

/**
 * Music player for buttons onclick functionality
 */
function playMusic(event, musicId) {
  let toggleMusic = document.getElementById(musicId);
  const button = event.target;
  currentMusic = musicId; // Set whats playing to an external variable!

  // Check if the loop is already playing, and if not, initialize its state
  if (!currentLoops[musicId]) {
    currentLoops[musicId] = musicId; // sets what loop is playing
    repeatEnabled[musicId] = false; // Set repeat to not be enabled as default
  }
  // Toggle play/pause functionality

  if (toggleMusic.paused) {
    toggleMusic.play();
    button.classList.add("bactive"); // Add the "bactive" class when playing
  } else {
    toggleMusic.pause();
    button.classList.remove("bactive"); // Remove the "bactive" class when paused
  }
}
// Reset the Loops so that it starts from the beginning!
function resetLoop(musicId) {
  if (currentLoops[musicId]) {
    let toggleReset = document.getElementById(musicId);
    toggleReset.currentTime = 0; // Set the current time to the beginning
  }
}
// Toggle play/pause functionality
function toggleRepeat(event, musicId) {
  repeatEnabled[musicId] = !repeatEnabled[musicId]; //Toggle the repeat status
  const button = event.target;
  // Enable or disable looping based on the repeat status

  if (repeatEnabled[musicId]) {
    let toggleLoop = document.getElementById(musicId);
    toggleLoop.loop = true; // Enable looping
    button.classList.add("bactive"); // Add the "bactive" class when repeat is enabled
  } else {
    let toggleLoop = document.getElementById(musicId);
    toggleLoop.loop = false; // Disable looping
    button.classList.remove("bactive"); // Remove the "bactive" class when repeat is disabled
  }
}

// Menu section of code!

/**
 * VoluMe functionality for the player!
 */

// Function to increase the volume for all audio tracks with the use of buttons!
function increaseVolume() {
  const audioElements = document.getElementsByTagName("audio");
  for (let i = 0; i < audioElements.length; i++) {
    if (audioElements[i].volume < 1.0) {
      // Increase the volume by 0.1 and round down to two decimal places
      audioElements[i].volume =
        Math.floor((audioElements[i].volume + 0.1) * 100) / 100;
      // Update the volume status
      updateVolumeStatus(audioElements[i].volume * 100);
    }
  }
}

// Function to decrease the volume for all audio tracks with the use of buttons!
function decreaseVolume() {
  const audioElements = document.getElementsByTagName("audio");
  for (let i = 0; i < audioElements.length; i++) {
    if (audioElements[i].volume > 0.0) {
      // Decrease the volume by 0.1 and round down to two decimal places
      audioElements[i].volume =
        Math.floor((audioElements[i].volume - 0.1) * 100) / 100;
      // Update the volume status
      updateVolumeStatus(audioElements[i].volume * 100);
    }
  }
}

// Function to update the volume status paragraph
function updateVolumeStatus(volume) {
  const volumeStatusElement = document.getElementById("volume-status");
  volumeStatusElement.textContent = `Volume: ${volume}%`; // Update the text content of the volume status paragraph with the new volume value
}

// Get the increase and decrease buttons
const increaseVol = document.getElementById("increase-vol");
const decreaseVol = document.getElementById("decrease-vol");

// Add event listeners for both click and touch events
increaseVol.addEventListener("click", increaseVolume);
increaseVol.addEventListener("touchstart", increaseVolume);

decreaseVol.addEventListener("click", decreaseVolume);
decreaseVol.addEventListener("touchstart", decreaseVolume);

/** Pause function */
// Function to pause all audio elements
function pauseAllAudio() {
  const audioElements = document.getElementsByTagName("audio");
  for (let i = 0; i < audioElements.length; i++) {
    audioElements[i].pause(); // Pause the audio element
  }
  // Used to pause the Sequencer!
  if (isPlaying) {
    isPlaying = !isPlaying;
    playButton.textContent = "Play"; // Changes the text to Pause if its playing
  }
}

/**  Key click play functions */
// Onclick audio function, takes the data-key from the audio and adds it when clicked from the onclick function
function clickPlay(event, audioIn) {
  const audio = document.querySelector(`audio[data-key='${audioIn}']`); // Find the audio element with the corresponding data-key attribute
  const button = event.currentTarget;

  // Get the DOM elements for displaying the current key and sound name
  const currentKey = document.getElementById("key-press");
  const soundNameElement = document.getElementById("sound-played");

  if (audio) {
    audio.play(); // Play the audio if it exists
    const soundName = audio.getAttribute("data-name"); // Get the data-name attribute value of the audio element
    currentKey.innerHTML = `You clicked!`; // Update the current key element with a message
    soundNameElement.innerHTML = soundName; // Update the sound name element with the name of the sound played
    button.classList.add("bactive"); // Add the "bactive" class to the button

    // Remove the "bactive" class after a certain duration with a function
    setTimeout(function () {
      button.classList.remove("bactive");
    }, 200);
  }
}

// Add a keydown event listener to the window and call the keyPlay function

window.addEventListener("keydown", keyPlay);

// Keydown functions! Takes the data-keyCode info and makes sure it plays the right sound!

function keyPlay(event) {
  // Get the DOM elements for displaying the current key and sound name
  const currentKey = document.getElementById("key-press");
  const soundNameElement = document.getElementById("sound-played");

  // Find the audio element with the corresponding data-key attribute based on the event's keyCode
  const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);

  // Find the button element with the corresponding data-key attribute based on the event's keyCode
  const button = document.querySelector(`button[data-key='${event.keyCode}']`);

  // If statement to check if an audio element and a button element with the specified data-key exist
  if (audio) {
    audio.play(); // Play the audio if it exists

    const soundName = audio.getAttribute("data-name"); // Get the data-name attribute value of the audio element
    currentKey.innerHTML = event.key; // Update the current key element with the pressed key
    soundNameElement.innerHTML = soundName; // Update the sound name element with the name of the sound played

    button.classList.add("bactive"); // Add the "bactive" class to the button

    // Remove the "bactive" class after a certain duration with a function
    setTimeout(function () {
      button.classList.remove("bactive");
    }, 200);
  } else {
    // Display a message if no audio element or button element with the specified data-key is found
    currentKey.innerHTML = `Sorry ${event.key} is not used`;
    soundNameElement.innerHTML = `No sound on ${event.key}`;
  }
}

//
//    Trying to get this sequencer to work!
//

const sequencers = document.querySelectorAll(".sequencer"); // selects all the elements with the class name of sequencer.
const playButton = document.getElementById("play-btn"); // selects the play button
const kickSound = document.getElementById("kick-sound"); // Adds the sound that i want to use!  (ToDo: Make it reusable for other sounds and more sequencers!!)
let isPlaying = false; // Using boolean false to not make it play!
let currentStep = 0; // Make sure it starts at step 0(1)!

// Add event listeners to sequencer
sequencers.forEach((sequencer) => {
  sequencer.addEventListener("click", toggleSequencer);
});

// Add event listener to play button
playButton.addEventListener("click", togglePlayback);

function toggleSequencer() {
  this.classList.toggle("bactive"); // Toggle the 'active' class on the sequencer
}

function togglePlayback() {
  // Toggle the playback
  isPlaying = !isPlaying;

  if (isPlaying) {
    playButton.textContent = "Pause"; // Changes the text to Pause if its playing
    currentStep = 0; // Make sure it always starts from Step 0(1)
    playActiveSequencers();
  } else {
    playButton.textContent = "Play"; // Changes the text to play if its paused
  }
}

// this part of the code checks if the sequencer at the current step is active and plays the kick sound

function playActiveSequencers() {
  // Iterates over the sequencer and checks if it is active or not!
  sequencers.forEach((sequencer, i) => {
    if (i === currentStep && sequencer.classList.contains("bactive")) {
      // Play the kick sound for the active part! ToDO (Make this reusable for other sounds!)
      kickSound.play();
    }
    sequencer.style.opacity = i === currentStep ? "0.5" : "1"; // Change opacity for the current step
  });

  // Move to the next step in the sequencer loop
  currentStep = (currentStep + 1) % sequencers.length;

  if (isPlaying) {
    setTimeout(playActiveSequencers, 300); // Add a delay between each step ToDo: (add choices to change the BPM!)
  }
}

/** Modal part of the code */
const modal = document.getElementById("modal"); // Get the modal element

const openModalBtn = document.getElementById("openModalBtn"); // Get the button that opens the modal

const closeModalBtn = document.querySelector(".close"); // Get the close button element

// Function to open the modal

const openModal = () => {
  modal.style.display = "block";
};

// Function to close the modal
const closeModal = () => {
  modal.style.display = "none";
};

openModalBtn.addEventListener("click", openModal); // Event listener to open the modal when the button is clicked

closeModalBtn.addEventListener("click", closeModal); // Event listener to close the modal when the close button is clicked

// Event listener to close the modal when the Escape key is pressed, for aria functionality!
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
