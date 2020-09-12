var monkey;
var stone1, stone2, stone3, stone4, stone5, stone6, stone7, stone8, stone9, stone10, stone11, stone12, stone13, stone14;
var stones;
var monkeypng;

function preload(){

  stones.loadImage("stone.png");
  monkeypng.loadAnimation(" Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png", "Monkey_08.png","Monkey_09.png","Monkey_10.png");

}

function setup(){

stone1.addImage(stones); 
stone2.addImage(stones);
stone3.addImage(stones);
stone4.addImage(stones);
stone5.addImage(stones);
stone6.addImage(stones);
stone7.addImage(stones);
stone8.addImage(stones);
stone9.addImage(stones);
stone10.addImage(stones);
stone11.addImage(stones);
stone12.addImage(stones);
stone13.addImage(stones);
stone14.addImage(stones);
monkey.addAnimation(monkeypng);


}

function draw(){
  background("white");
  gameCamera.x= monkey.x;

  if(keydown(RIGHT_ARROW)){

    monkey.velocityX=12
    
  }
  if (monkey.x=900){

    console.log("GAME OVER");
    
  }

}
