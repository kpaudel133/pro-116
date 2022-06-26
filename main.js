rightEyeX = 0;
rightEyeY = 0;

function preload(){
    maginfying_glass= loadImage('https://i.postimg.cc/8c0H22hn/magnifying-glass-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(maginfying_glass, rightEyeX - 14, rightEyeY - 13, 30, 30);
}

function takeSnapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log("PoseNet is Initialized")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("Right eye x = " + results[0].pose.rightEye.x);
        console.log("Right eye y = " + results[0].pose.rightEye.y);
        rightEyeX = results[0].pose.rightEye.x;
        rightEyeY = results[0].pose.rightEye.y;
    }
}