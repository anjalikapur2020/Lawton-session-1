

function preload(){
bgimg=loadImage("assets/spalsh.gif")
}
function setup(){
createCanvas(windowWidth,windowHeight)

playbutton=createButton("PLAY")
playbutton.position(width/2,height-100)
playbutton.size(100,50)

}
function draw(){

    background(bgimg)

}