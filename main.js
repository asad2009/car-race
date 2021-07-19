canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
carW=100;
carH=90;
carX=10;
carY=10;
car1_img="https://i.postimg.cc/9rqYz9HM/car1.png";
car2_img="https://i.postimg.cc/tnnW1Kff/car2.png";
car2W=100;
car2H=90;
car2X=10;
car2Y=100;
function add(){
    bg_img=new Image();
    bg_img.onload=uploadBackgrond;
    bg_img.src="https://image.freepik.com/free-vector/race-track-with-start-finish-line-car-carting-races-asphalt-road-template-fast-speedway-auto-moto-sport-concept-top-view_168129-872.jpg";
    car_img1=new Image();
    car_img1.onload=uploadCar1;
    car_img1.src=car1_img;
    car_img2=new Image();
    car_img2.onload=uploadCar2;
    car_img2.src=car2_img;
    
}
function uploadBackgrond(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}
function uploadCar1(){
    ctx.drawImage(car_img1,carX,carY,carW,carH);
    
}
function uploadCar2(){
    ctx.drawImage(car_img2,car2X,car2Y,car2W,car2H);
    
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
if(keypress=="38"){
    up();
    console.log("up");
}
if(keypress=="40"){
    down();
    console.log("down");
}
if(keypress=="37"){
   left();
    console.log("left");
}
if(keypress=="39"){
    right();
    console.log("right");
}
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
if(keypress=="87"){
    w();
    console.log("w");
}
if(keypress=="83"){
    s();
    console.log("s");
}
if(keypress=="65"){
   a();
    console.log("a");
}
if(keypress=="68"){
    d();
    console.log("d");
}
}
function up(){
    if(carY>=0)
    {
       carY=carY-10;
        console.log("when up pressed,X="+carX+",Y="+carY);
        uploadBackgrond();
        uploadCar1();
    }
}
function down(){
    if(carY<=500)
    {
        carY=carY+10;
        console.log("when down pressed,X="+carX+",Y="+carY);
        uploadBackgrond();
        uploadCar1();
    }
}
function left(){
    if(carX>=0)
    {
        carX=carX-10;
        console.log("when left pressed,X="+carX+",Y="+carY);
        uploadBackgrond();
        uploadCar1();
    }
}
function right(){
    if(carX<=700)
    {
        carX=carX+10;
        console.log("when right pressed,X="+carX+",Y="+carY);
        uploadBackgrond();
        uploadCar1();
    }
}
function w(){
    if(car2Y>=0)
    {
       car2Y=car2Y-10;
        console.log("when w pressed,X="+car2X+",Y="+car2Y);
        uploadBackgrond();
        uploadCar2();
    }
}
function s(){
    if(car2Y<=500)
    {
        car2Y=car2Y+10;
        console.log("when s pressed,X="+car2X+",Y="+car2Y);
        uploadBackgrond();
        uploadCar2();
    }
}
function a(){
    if(car2X>=0)
    {
        car2X=car2X-10;
        console.log("when a pressed,X="+car2X+",Y="+car2Y);
        uploadBackgrond();
        uploadCar2();
    }
}
function d(){
    if(car2X<=700)
    {
        car2X=car2X+10;
        console.log("when d pressed,X="+car2X+",Y="+car2Y);
        uploadBackgrond();
        uploadCar2();
    }
}