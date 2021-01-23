function preload(){

}

function setup(){

    canvas=createCanvas(400,400);
    canvas.position(475,170);
    video = createCapture(VIDEO);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function gotposes(results){

    if(results.length>0){

        console.log(results);
        console.log("leftEye x= "+results[0].pose.leftEye.x);
        console.log("rightEye y= "+results[0].pose.rightEye.y);
    }
}

function modelLoaded(){

    console.log("modelLoaded");
}


function draw(){

    image(video,10,10,380,380);   
}

function take_snapshot(){

    save('download.png');
}
