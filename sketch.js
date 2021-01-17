const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  ground
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10
,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

var ball;

var rope;

function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,550,300,15);
    ground1 = new Ground1(700,400,350,15);

    ball=new Ball(200,200,40,40)

    rope=new Rope(ball.body,{x:200,y:150});
   
    box1= new Box(400,350,50,30);
    box2= new Box(350,400,50,30);
    box3= new Box(400,400,50,30);
    box4= new Box(450,400,50,30);
    box5= new Box(300,100,50,30);
    box6= new Box(350,100,50,30);
    box7= new Box(400,100,50,30);
    box8= new Box(450,100,50,30);
    box9= new Box(500,100,50,30);
    box10= new Box(700,100,50,30);
    box11= new Box(750,100,50,30);
    box12= new Box(800,100,50,30);
    box13= new Box(650,100,50,30);
    box14= new Box(700,100,50,30);
    box15= new Box(600,100,50,30);
     box16= new Box(750,100,50,30);
     box17= new Box(650,100,50,30);
     box18= new Box(850,100,50,30);
     box19= new Box(550,100,50,30);
     box20= new Box(600,100,50,30);
     box21= new Box(800,100,50,30);
     box22= new Box(650,100,50,30);
     box23= new Box(750,100,50,30);
    box24= new Box(700,100,50,30);
    box25= new Box(700,100,50,30);
 
     
}
function draw(){
    
        background(180)
        Engine.update(engine);


        if (ball.isTouch(box1,box2,box3,box4,box5,box6,box7,box9,box10,box11,box12,box13,box14
         ,box15,box16,box17,box19,box20,box21,box22,box23,box24,box25)){
            box1.visible=false;
            box2.visible=false;
            box3.visible=false;
            box4.visible=false;
            box5.visible=false;
            box6.visible=false;
            box7.visible=false;
            box8.visible=false;
            box9.visible=false;
            box10.visible=false;
            box11.visible=false;
            box12.visible=false;
            box13.visible=false;
            box14.visible=false;
            box15.visible=false;
            box16.visible=false;
            box17.visible=false;
            box18.visible=false;
            box19.visible=false;
            box20.visible=false;
            box21.visible=false;
            box22.visible=false;
            box23.visible=false;
            box24.visible=false;
            box25.visible=false;
         }
        

     ground.display();
     ground1.display();

        ball.display();

        rope.display()

     box1.display();
     box2.display();
     box3.display();
     box4.display(); 
     box5.display();
      box6.display();
      box7.display();
      box8.display();
      box9.display();
      box10.display();
      box11.display();
      box12.display();
      box13.display();
      box14.display();
      box15.display();
      box16.display();
      box17.display();
      box18.display();
      box19.display();
      box20.display();
      box21.display();
      box22.display();
      box23.display();
     box24.display();
      box25.display();
 
}
function mouseDragged(){
   
         Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
     
 }