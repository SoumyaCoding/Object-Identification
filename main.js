objectDetector="";

img="";
objects = [];
status = "";

funtion preload(){
    img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector= m15.objectDetector('cocosses , modelLoaded');
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

funtion modelLoaded(){
    stats = true;
    objectDetector.detect(img, gotResult);
}

functio gotResult(erroe, results){
    if(error){
        console.log(error);
    }
    console.og(resulta);
    object =results;
}

function draw(){
    image(img, 0, 0, 640, 420);
    
    if(status !="")
        {
            for(var i = 0;i < objects.length; i++){
                document.getElementById("status").innerHTML = "Status : Object Detected";
                
                fill(255, 0, 0);
                percent = floor(objects[i].confidence*100);
                text(objects[i].label+""+percent+"%",objects[i].x + 15, objects[i].y + 15)
                noFill();
                stroke(255, 0, 0);
                rect(objects[i].y, objects[i].width, objects[i].height);
            }
        }
}
