var x = 20;
var y = 20;

function rnd(){
    var x = random(0,255);
    return x;
}

function setup(){

    createCanvas(innerWidth, innerHeight-135);
    background(0);

}

function draw(){

    if(x >= innerWidth){
        x = 20;
        y = y + 20;
    }else{
        fill(color(rnd(), rnd(), rnd()));
        ellipse(x, y, 20);
        x = x + 20;
    }
    
}