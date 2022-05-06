const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var block;
var blocks = [];

function setup(){
    createCanvas(1000, 500)

    engine = Engine.create();
    world = engine.world;
    
    var options={
        isStatic: true
    }

    ground = Bodies.rectangle(500,500,1000,20, options)
    stand = Bodies.rectangle(500, 400, 300,20, options)
    stand2 = Bodies.rectangle(800, 350, 300, 20, options)

    World.add(world,ground)
    World.add(world,stand)
    World.add(world,stand2)

    for(var i = 0; i < 200; i+=5){
        // for(var j = 0; j < 200; j+=5){
        blocks.push(new Block(i, 380, 50,50))
        // }
    }
}

function draw(){
    background("Green")
    Engine.update(engine)
    push()
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y, 1000,20)
    rect(stand.position.x,stand.position.y, 300,20)
    rect(stand2.position.x,stand2.position.y, 300,20)
    pop()

    for(var i = 0; i < blocks.length; i++){
        blocks[i].show();
    }
}