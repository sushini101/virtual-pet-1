var dog, happyDog, databse, foodS, foodStock

function preload()
{
dog = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500,500);
  
  dog = createSprite(250,250,60,60);
  dog.addImage("images/dosImg.png");

  foodStock=database.ref('food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46,139,87);

if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
 
drawSprites();
  textSize(50);
  fill("black");
 

}


function readStock(data){
  foodS=data.val();

}

function writeStock(x){

  database.ref('/').update({
    food:x
  })
}