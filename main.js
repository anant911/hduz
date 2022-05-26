rightX=0;
rightY=0;
score_right=0;
function preload()
{

}

function setup()
{
canvas=createCanvas(700,600);
canvas.parent("canvas");
video=createCapture(VIDEO);
video.size(700,600);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses)

}

function draw()
{
image(video, 0,0,700,600);


if(score_right>0.002)
{
fill("blue");
stroke("white");
circle(rightX, rightY,20);
}

}

function modelLoaded()
{
    console.log('model is loaded');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        rightX=results[0].pose.rightWrist.x;
        rightY=results[0].pose.rightWrist.y;
        console.log(results);
        score_right=results[0].pose.keypoints[10].score;
        console.log(score_right);
    }
}


function startGame()
{
  game_status = "start";
  document.getElementById("status").innerHTML = "Game Is Loading";
}