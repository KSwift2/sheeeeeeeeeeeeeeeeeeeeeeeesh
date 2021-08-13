noseX=0;
noseY=0;

function preload() {
  moostache = loadImage('https://i.postimg.cc/xTK1gGCg/moostache.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    mouthX = results[0].pose.mouth.x-15;
    mouthY = results[0].pose.mouth.y-15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(moostache, mouthX, mouthY, 30, 30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}