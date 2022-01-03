const Projects = [
    {
        id: 'asl',
        vh: 2,
        name: 'American Sign Language Recognizer',
        skills: 'Python, Machine Learning',
        description: 'During my fourth year of engineering school, I made an internship at Capgemini where I had to develop a neural network architecture that could recognize the ASL alphabet. The input are the frames of a live webcam and the network makes a prediction and show the letter associated to the current sign.',
        markdown: `# The Project
During my fourth year of engineering school, I had the opportunity to make an internship inside the Fablab of Capgemini's Applied Innovation Exchange. My final project was to build a neural network capable of recognizing the American Sign Language's alphabet in real time through a webcam input.

All the project is made with Python 3. The main libraries that I used are :

- \`pytorch\` to build and train the neural network
- \`opencv\` to capture and process the webcam's frames
- \`mediapipe\` to detect hands and retrieve the position of their landmarks

\`mediapipe\` is a neural network library specialized in different body detection solutions like pose detection and face detection. I use it in order to detect hands on the frame, and it outputs a list of 21 landmarks representing the position in 3D of key points of the hand (wrist, fingers, articulations).

I then used \`pytorch\` to build the neural network that has an input size of 63 (21 landmarks * 3 dimension) and an output size of 26 (all the letters of the alphabet).

# Training 

I created my own dataset using a custom script capturing all the landmarks for each frame and saving them in a json file. At the end, I had 2,000 examples for each of the 26 signs for a result of 54,000 examples. After some data augmentation (vertical mirror to include left-handed people and random noise), I got to around 200,000 examples and started the training. The results of the testing loss and accuracy are shown below : 

<div class="image-list" style="text-align:center;">
    <img class="img-expand" src="assets/images/asl/loss0.png" width="450px" height=""/> 
    <img class="img-expand" src="assets/images/asl/acc0.png" width="450px" height=""/> 
</div>

# Demonstration

I made a script that use the trained model in order to predict the signs that are shown through the webcam. Multiple hands can be detected simultaneously and the prediction for each sign is shown next to it on the output frame along with the prediction confiance level.

I also added a feature that writes a sequence of signs as letters on the top left corner of the screen in order for the user to form simple words. Two 'delete' and 'reset' buttons can also be activated when a hand is detected inside their bounding box to have a better control over the sequence of letters.

An example of all of these features can be shown in the demonstration below :

<div class="video-container" id="centered-thing">
<iframe width="100%" 
src="https://www.youtube.com/embed/XoeKoQWkRt0">
</iframe>
</div>`
    },
    {
        id: 'jetpack',
        name: 'Jetpack Joyride for Casio',
        skills: 'C, assembly',
        description: 'When I was 16, I was part of a game development community focused on Casio graphical calculators. I decided to adapt the famous Jetpack Joyride mobile game on a 128x64 monochrome calculator with 1mb of memory. It resulted in a calculator app that is currently ranked as the best game on this site with more than 40,000 downloads.',
        markdown: `# The Project
During my fourth year of engineering school, I had the opportunity to make an internship inside the Fablab of Capgemini's Applied Innovation Exchange. My final project was to build a neural network capable of recognizing the American Sign Language's alphabet in real time through a webcam input.

All the project is made with Python 3. The main libraries that I used are :

- \`pytorch\` to build and train the neural network
- \`opencv\` to capture and process the webcam's frames
- \`mediapipe\` to detect hands and retrieve the position of their landmarks

\`mediapipe\` is a neural network library specialized in different body detection solutions like pose detection and face detection. I use it in order to detect hands on the frame, and it outputs a list of 21 landmarks representing the position in 3D of key points of the hand (wrist, fingers, articulations).

I then used \`pytorch\` to build the neural network that has an input size of 63 (21 landmarks * 3 dimension) and an output size of 26 (all the letters of the alphabet).

# Training 

I created my own dataset using a custom script capturing all the landmarks for each frame and saving them in a json file. At the end, I had 2,000 examples for each of the 26 signs for a result of 54,000 examples. After some data augmentation (vertical mirror to include left-handed people and random noise), I got to around 200,000 examples and started the training. The results of the testing loss and accuracy are shown below : 

<div class="image-list" style="text-align:center;">
    <img class="img-expand" src="assets/images/asl/loss0.png" width="450px" height=""/> 
    <img class="img-expand" src="assets/images/asl/acc0.png" width="450px" height=""/> 
</div>

# Demonstration

I made a script that use the trained model in order to predict the signs that are shown through the webcam. Multiple hands can be detected simultaneously and the prediction for each sign is shown next to it on the output frame along with the prediction confiance level.

I also added a feature that writes a sequence of signs as letters on the top left corner of the screen in order for the user to form simple words. Two 'delete' and 'reset' buttons can also be activated when a hand is detected inside their bounding box to have a better control over the sequence of letters.

An example of all of these features can be shown in the demonstration below :

<div class="video-container" id="centered-thing">
<iframe width="100%" 
src="https://www.youtube.com/embed/XoeKoQWkRt0">
</iframe>
</div>`,
        vh: 3,
    },
    {
        id: 'causality',
        name: 'Causality',
        skills: 'C#, Unity',
        description: 'Causality is a game about time and rewinding the flow of time. It\'s also a solo cooperation game, but you\'re cooperating with yourself... in the future ! Or in the past, it depends on the time... I started developping this game at the beggining of September 2020 and I already made a great prototype. I\'m planning to finish and publish the game on PC and mobile mid-2021.',
        markdown: `# The Project
During my fourth year of engineering school, I had the opportunity to make an internship inside the Fablab of Capgemini's Applied Innovation Exchange. My final project was to build a neural network capable of recognizing the American Sign Language's alphabet in real time through a webcam input.

All the project is made with Python 3. The main libraries that I used are :

- \`pytorch\` to build and train the neural network
- \`opencv\` to capture and process the webcam's frames
- \`mediapipe\` to detect hands and retrieve the position of their landmarks

\`mediapipe\` is a neural network library specialized in different body detection solutions like pose detection and face detection. I use it in order to detect hands on the frame, and it outputs a list of 21 landmarks representing the position in 3D of key points of the hand (wrist, fingers, articulations).

I then used \`pytorch\` to build the neural network that has an input size of 63 (21 landmarks * 3 dimension) and an output size of 26 (all the letters of the alphabet).

# Training 

I created my own dataset using a custom script capturing all the landmarks for each frame and saving them in a json file. At the end, I had 2,000 examples for each of the 26 signs for a result of 54,000 examples. After some data augmentation (vertical mirror to include left-handed people and random noise), I got to around 200,000 examples and started the training. The results of the testing loss and accuracy are shown below : 

<div class="image-list" style="text-align:center;">
    <img class="img-expand" src="assets/images/asl/loss0.png" width="450px" height=""/> 
    <img class="img-expand" src="assets/images/asl/acc0.png" width="450px" height=""/> 
</div>

# Demonstration

I made a script that use the trained model in order to predict the signs that are shown through the webcam. Multiple hands can be detected simultaneously and the prediction for each sign is shown next to it on the output frame along with the prediction confiance level.

I also added a feature that writes a sequence of signs as letters on the top left corner of the screen in order for the user to form simple words. Two 'delete' and 'reset' buttons can also be activated when a hand is detected inside their bounding box to have a better control over the sequence of letters.

An example of all of these features can be shown in the demonstration below :

<div class="video-container" id="centered-thing">
<iframe width="100%" 
src="https://www.youtube.com/embed/XoeKoQWkRt0">
</iframe>
</div>`,
        vh: 2.5,
    },
    {
        id: 'landscape',
        name: 'Space-themed Landscape Generator',
        skills: 'C++, SVG',
        description: 'One of the projects I made during my second year in engineering school was a landscape generator. I really like space and its phenomenas so I chose this theme and started experimenting with SVG graphics. It was a fun experience both in code and in design, the render is really colorful, diversified and refined.',
        markdown: `# The Project
During my fourth year of engineering school, I had the opportunity to make an internship inside the Fablab of Capgemini's Applied Innovation Exchange. My final project was to build a neural network capable of recognizing the American Sign Language's alphabet in real time through a webcam input.

All the project is made with Python 3. The main libraries that I used are :

- \`pytorch\` to build and train the neural network
- \`opencv\` to capture and process the webcam's frames
- \`mediapipe\` to detect hands and retrieve the position of their landmarks

\`mediapipe\` is a neural network library specialized in different body detection solutions like pose detection and face detection. I use it in order to detect hands on the frame, and it outputs a list of 21 landmarks representing the position in 3D of key points of the hand (wrist, fingers, articulations).

I then used \`pytorch\` to build the neural network that has an input size of 63 (21 landmarks * 3 dimension) and an output size of 26 (all the letters of the alphabet).

# Training 

I created my own dataset using a custom script capturing all the landmarks for each frame and saving them in a json file. At the end, I had 2,000 examples for each of the 26 signs for a result of 54,000 examples. After some data augmentation (vertical mirror to include left-handed people and random noise), I got to around 200,000 examples and started the training. The results of the testing loss and accuracy are shown below : 

<div class="image-list" style="text-align:center;">
    <img class="img-expand" src="assets/images/asl/loss0.png" width="450px" height=""/> 
    <img class="img-expand" src="assets/images/asl/acc0.png" width="450px" height=""/> 
</div>

# Demonstration

I made a script that use the trained model in order to predict the signs that are shown through the webcam. Multiple hands can be detected simultaneously and the prediction for each sign is shown next to it on the output frame along with the prediction confiance level.

I also added a feature that writes a sequence of signs as letters on the top left corner of the screen in order for the user to form simple words. Two 'delete' and 'reset' buttons can also be activated when a hand is detected inside their bounding box to have a better control over the sequence of letters.

An example of all of these features can be shown in the demonstration below :

<div class="video-container" id="centered-thing">
<iframe width="100%" 
src="https://www.youtube.com/embed/XoeKoQWkRt0">
</iframe>
</div>`,
        vh: 2.5,
    }, 
]

export default Projects