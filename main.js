noseX=0;
noseY=0;
diffrence = 0;
rightWristX = 0;
leftWristX = 0;
function setup()
{
    video = createCapture(VIDEO)
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('poseNet Is Initialized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.x;
        console.log("noseX = " + noseX +"noseY = " + noseY)

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference =floor (leftWristX - rightWrist);

        console.log("leftWristX = "+ leftWristX +"rightWristX = "+ rightWristX +"difference = " + difference);

    }
}
   

function draw()
{
    document.getElementById("square_side").innerHTML = "Width And height of the square will be = " + difference +"px";
    background('#969A97');
    fill("#F90093");
    stroke('#F90093');
    square(noseX, noseY, difference;
}