import React, { useEffect } from 'react'
import './camera.css'

const Camera = props => {
  const width  = 320
  let height = 0
  let video = null
  let canvas = null
  let photo = null
  let startbutton = null
  let streaming = null

  useEffect(() => {
    setup()
  }, [])

  function setup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startbutton = document.getElementById('startbutton');

    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(function(stream) {
      video.srcObject = stream;
      video.play();
    })
    .catch(function(err) {
      console.log("An error occurred: " + err);
    });

    video.addEventListener('canplay', function(ev){
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth/width);
      
        // Firefox currently has a bug where the height can't be read from
        // the video, so we will make assumptions if this happens.
      
        if (isNaN(height)) {
          height = width / (4/3);
        }
      
        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        streaming = true;
      }
    }, false);

    startbutton.addEventListener('click', function(ev){
      takepicture();
      ev.preventDefault();
    }, false);
    
    clearphoto();
  }

  function clearphoto() {
    const context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }

  function takepicture() {
    const context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);
    
      const data = canvas.toDataURL('image/png');
      photo.setAttribute('src', data);
    } else {
      clearphoto();
    }
  }

  return (
    <>
      <div className="contentarea">
          <div className="row">
            <div className="col-md-6">
              <div className="camera">
                <video id="video">Video stream not available.</video>
                <button id="startbutton" className="btn btn-success">Tirar foto</button> 
              </div>
            </div>
            <div className="col-md-6">
              <div className="output">
                <img id="photo" alt="The screen capture will appear in this box." /> 
              </div>
            </div>
          </div>
        <canvas id="canvas">
        </canvas>
      </div>
    </>
  )
}

export default Camera