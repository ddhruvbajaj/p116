noseX=0;
noseY=0;




function preload(){
    mustache_image=loadImage("21955-9-moustache-clipart.png");
}
    

function setup(){
    canvas=createCanvas(500,460);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400)
    video.hide();
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on('pose',getresults);
}

function draw(){
    image(video,0,0,500,460)
    image(mustache_image,noseX,noseY,30,30);    
}

function snap_shot(){
    save('filtercolor.png');
}

function modelloaded(){
    console.log("Model loaded");
}

function getresults(result){
    if(result.length>0){
     console.log(result);
 console.log("x cordinate of nose="+result[0].pose.nose.x);   
 console.log("y cordinate of nose="+result[0].pose.nose.y);  
 noseX=result[0].pose.nose.x +40;
 noseY=result[0].pose.nose.y;
 }


}