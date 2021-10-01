function preload() {

}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.position(200, 200);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 230, 150, 220, 200);

 
}

function take_snapshot(){    
  save('student_name.png');
}
