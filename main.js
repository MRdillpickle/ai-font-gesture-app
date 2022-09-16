lr = 0;
rr = 0;
dif = 0;
function setup(){
cam = createCapture(VIDEO);
    cam.size(500,500);
    canvas = createCanvas(500,500);
    poseNet = ml5.poseNet(cam, modelload);
    poseNet.on('pose', gotposes);
}
function modelload() {console.info("Pose Net Ready");}
function gotposes(results) {
    if (results.length > 0) {
        console.log("results");
        rr = results[0].pose.rightWrist.x;
        lr = results[0].pose.leftWrist.x;
        dif = floor(lr - rr);
    }
}
function draw() {
    background('#969A97');
    textSize(dif);
    fill('#FFeE787');
text('peter', 50,400);
}