nose_x=""
nose_y=""


function preload(){
    clown_nose=loadImage("https://i.postimg.cc/mZKDTyfn/455-4557163-icon-clown-nose-circle-hd-png-download-removebg-preview.png")
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    video.size(300,300)

    pose_net=ml5.poseNet(video,model_loaded)
    pose_net.on("pose",got_poses)
}
function model_loaded(){
    console.log("posenet is initialized")
}

function draw(){
    image(video,0,0,300,300)
    image(clown_nose,nose_x,nose_y,60,30)
}
function snap(){
    save("clown__image.jpeg")
}
function got_poses(results){
    if(results.length>0){
        console.log(results)
        nose_x=results[0].pose.nose.x-30;
        nose_y=results[0].pose.nose.y-15;
    }
}