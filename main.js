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
function draw() {
    
}

function gP(results) {
    if (results.length>0) {
        console.log(results);
    }
}