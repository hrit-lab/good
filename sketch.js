var ground,groundImg;
var tom,tomImg, tomImg2, tomImg3, tomImg4;
var jerry,jerryImg, jerryImg2, jerryImg3, jerryImg4;

function preload() {
    //load the images here
    groundImg = loadImage("garden.png");
    tomImg = loadAnimation("tomOne.png");
    jerryImg = loadAnimation("jerryOne.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     ground = createSprite(1000,800);
     ground.addImage(groundImg);

     tom = createSprite(800,400);
     tom.addAnimation("sitting",tomImg);

     jerry = createSprite(300,400);
     jerry.addAnimation("sitting",jerryImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
