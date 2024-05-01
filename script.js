const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const startStreamButton = document.getElementById('startStream');

// Prompt the user to select media stream, pass to the video element then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        };
    }
    catch (error) {}
}

button.addEventListener('click', async () => { 
    // disable the button
    button.dissabled = true;
    // Start picture in picture 
    await videoElement.requestPictureInPicture();
    // resset the button
    button.disabled = false;
});

startStreamButton.addEventListener('click', selectMediaStream);

