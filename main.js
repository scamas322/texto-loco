var diferencia = 0;
var rightWristx = 0;
var leftWristx = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(800,600);
    canvas.position(550,200);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("poseNet inicializado");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        diferencia = floor(leftWristx - rightWristx);
        console.log("leftwristx =" + leftWristx + " rightwristx =" + rightWristx + " diferencia =" + diferencia);
    }
}

function draw() {
    background('#6C91C2');
    
      document.getElementById("font_size").innerHTML = "El tamaño de la fuente es: = " + diferencia +"px";
    textSize(diferencia);
    fill('#FFE787');
    text('chochomil', 50, 400);
    }