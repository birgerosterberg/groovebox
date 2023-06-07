# Groove Box

Are you tired of those mundane, monotonous commutes that drain your energy and leave you craving some excitement? Say goodbye to boredom and hello to the next level of musical exhilaration with my revolutionary Groove Box! Designed with JavaScript, reachable with any browser on any device, its specifically for those seeking an escape from the daily grind, my sleek and minimalistic creation is here to spread joy!

Featuring a powerful drum machine, a sequencer, a versatile loop player, and a captivating backing track player, my groove box is a true all-in-one powerhouse. Let your creativity flow as you layer captivating beats, craft mesmerizing melodies, and unleash your inner musical genius!

## Design

My design philosophy for this Groove Box was centered around minimalism and elegance, focusing primarily on the core functions. I believe that excessive visual embellishments can detract from the essence of the tool. Following in the footsteps of many Digital Audio Workstations (DAWs), I aimed to create a streamlined interface that places music-making at the forefront, allowing users to immerse themselves in the creative process without unnecessary distractions.

Color code HIGH END AND CLASSY used from: \
https://hookagency.com/blog/web-design-color-palettes/ \
![color code inspiration](assets/readme/color-ideas-web-design-classy-distinctive.webp) \
dark-gold {color: #8E793E} \
light-gold {color: #AD974F}\
intellectual-grey {color: #231F20} \
light-grey {color: #EAEAEA}

Gradients from: \
https://cssgradient.io/ \

Box Shadows from: \
https://getcssscan.com/css-box-shadow-examples

## Features

---

### Menu

I've added a menu at the top of the groove box with a "How To" section for instructions and a pause button to stop all active audio. It also includes a volume control with a text display showing the percentage and + / - buttons for 10% adjustments. This menu enhances usability and offers quick access to important features for an improved user experience.

---

### Navigation

I have opted for a tab-based navigation system, enabling seamless switching between different sections with ease. This design choice allows me to keep various parts of the Groove Box sounds active while effortlessly transitioning to the desired section.

Moreover, this design solution offers the convenience of utilizing keyboard keys on desktop devices to play the Drum Machine within each of the Groove Box functions, allowing for multitasking and simultaneous arrangement of other elements.

---

### Drum Machine

I have meticulously crafted the drum machine section to be incredibly user-friendly, ensuring clarity and understanding with every interaction. When a button is clicked, touched, or a key is pressed, the corresponding action is immediately visible and intuitive. To provide visual feedback, a green light illuminates to indicate which sound is currently active. Additionally, each button is thoughtfully labeled, displaying both the name of the sound and the key that triggers it.

In addition to the aforementioned features, I have incorporated a display that indicates which key is being pressed and the corresponding sound being played. This real-time feedback allows users to have a visual reference of their input and the resulting audio output. Furthermore, if a key is pressed that does not trigger any sound, a message is displayed to notify the user that no sound is assigned to that specific key.

---

### Sequencer

The sequencer is undoubtedly one of the standout features of the Groove Box, and i am thrilled with the sequencer, since users can easily add steps where sounds will play, creating intricate patterns and compositions. Each step where a sound is playing gets visually indicated by a green light, providing a clear overview of the active elements.

When the play button is pressed, the sequencer progresses through each step, playing the corresponding sound if it is marked green. This allows for dynamic and automated playback of the created sequences. While the current implementation serves its purpose effectively, i acknowledge that given more time, i could have implemented additional powerful functionalities to further enhance the sequencer. Nonetheless, even in its current state, the sequencer provides a functional and engaging experience.

---

### Loops

The loops section enhances you with pre-recorded sounds, adding captivating layers to your compositions. Activate loops with ease, and utilize the repeat function for continuous playback. A reset option allows loops to start from the beginning, providing flexibility in your creative process.

Activated loops are visually represented by green buttons, offering a clear indication of their status. When loops are deactivated, the green illumination is removed, simplifying loop management.

With the loops section, you can effortlessly add depth and texture to your creation. Explore the possibilities and elevate your musical creations!

---

### Backing Tracks

The backing tracks feature effortlessly adds finished songs as a background layer. A simple play/pause function for the named button, marked green when activated and unmarked when paused. With this feature, you can layer your own elements over the tracks. Explore new musical possibilities with ease and enjoy a seamless and immersive experience.

---

### Features Left to Implement

I had several features in mind that I truly wanted to implement to transform this into an exceptional groove box. However, I needed to ensure that the existing components were working flawlessly. Let me share with you an idea of what I envision for further implementation. I must say, this has been one of the most enjoyable programming experiences I've ever had! Initially, it started as a basic drum machine accompanied by a backing track, but as time went on, I found myself increasingly inspired. I couldn't resist pushing the boundaries and taking it to new heights. It dawned on me that JavaScript has the potential to create something truly incredible, beyond what I could have ever imagined.

#### Drum Machine

- Add the choice of chosing from a list of sounds, making it more modular.

#### Sequencer

- Set your own BPM, (beats per minute)
- Make the full range of the Drum Machine available.
- Make more pages where the sequence can continue how ever long it wants!

#### Loops

- Add categories for loops.

#### Backing Tracks

- Add categories for more choice

#### Piano (Non existing feature)

- A playable Piano.
- Separate left and right side of the keyboard, left piano, right drum machine.

#### Metronome (None existing feature)

- Add a metronome to keep track of the beat.

---

## Learning content used

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd \
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio \
https://www.toptal.com/developers/keycode \
Keyboard Events from Code Institute Course! \
Adding Event Listeners from Code Institute Course! \
https://www.tutorialspoint.com/how-to-create-tabs-with-css-and-javascript

Ive probably spent a few to many hours reading and searching for solutions on StackOverflow. \
https://www.stackoverflow.com/

## Media

### Samples

https://soundpacks.com/free-sound-packs/jazz-drum-kit/
https://www.drumkito.com/sample-packs/roland-tr-808-sample-pack/

### Songs

https://www.drumeo.com/free-playalongs \
https://www.wikiloops.com/tracks/Jazz-without-Drums.php

## Buggs

Fixes:

Instead of having play / pause button i made toggle for music playback.

Added if check if audio is found or not because it was giving error message in the consle when i i pressed a key that didnt exist else!

Using data-key function for the pad sample player so i can reuse the function and i only have to give the onclick the same number as the data-key that i use for the "keyPlay" function. Reusing as much as possible!

When pressing Reset button due to both the Loop and Backing Tracks play music with the same function they disturb eachother... Have to make my own functions for each of them to work properly.

Fixed by adding objects with their own status depending on the musicId!
