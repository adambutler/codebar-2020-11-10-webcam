const NodeWebcam = require('node-webcam')
const fs = require('fs')
const path = require('path')

var opts = {
  width: 640,
  height: 360,
  quality: 60,
  frames: 1,
  delay: 0,
  saveShots: true,
  output: "jpeg",
  device: "Microsoft® LifeCam Cinema(TM)",
  callbackReturn: "location",
  verbose: true
};

var Webcam = NodeWebcam.create(opts);

function capture() {
  Webcam.capture("webcam", function( err, data ) {
    console.log(err, data)
  });  
}

setInterval(capture, 1000)