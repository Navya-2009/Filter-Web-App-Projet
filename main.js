function preload(){

}

function setup(){

    canvas=createCanvas(400,400);
    canvas.position(475,170);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){

    image(video,10,10,380,380);   
}

function take_snapshot(){

    save('download.png');
}
