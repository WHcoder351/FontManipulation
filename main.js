difference = 0;
LWx =0;
RWx =0;
function preload() {
    
}
function setup() {
    video = createCapture(VIDEO);
    video.size(400,300);
    video.position(50 , 300);

    canvas = createCanvas(400, 400);
    canvas.position(500, 225);

    pose = ml5.poseNet(video, mL);
    pose.on('pose', gP); 
}
function mL() {
    console.log("PoseNet is Initialized");
}
function gP(results) {
    if (results.length>0) {
        console.log(results);

        LWx = results[0].pose.leftWrist.x;
        RWx = results[0].pose.rightWrist.x;
        difference = floor(LWx - RWx);
    }
}

function draw() {
    document.getElementById("px").innerHTML = "Font size is " +difference+ "px";
    textSize(difference);
    fill("#1c03fc");
    text('Jason S. R.', 125, 200);
}
