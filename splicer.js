x =window.innerWidth;
num = 0;
y = window.innerHeight;
const string1 = "LOADING FALLEN OS....";
const string2 = "USER: MITHRAX";
const string3 = "STATUS: KELL OF LIGHT";
const string4 = "PASSWORD REQUESTED";

function setup() {
  frameRate(30);
  createCanvas(x,y);
  background(0);
  console.log(x);
  console.log(y);
}


function draw() {
  fill(color(255, 0, 0, 0));
  square(x/45, 20, 25);
  square(x/45, y-45, 25);
  stroke(255);
  line(x/45+12.5, 45, x/45+12.5, y-45);
  line(x/45+25, y/45+12.5, x-45+(x/45), y/45+12.5);

  //line2
  square(x-(x/45)-25, 20, 25);
  square(x-(x/45)-25, y-45, 25);
  line(x-(x/45)-(25/2), 45, x-(x/45)-(25/2), y-45);
  stroke(223,75,147);

  fill(255,3,49);
  textSize(12);

  console.log(string1[num]);
  /*if(random(0,1)==1){
    fill(color(59,255,75));
  }*/
  //text(string1[num], x/45+((x/60)*(num)), y/2);
  text(string1[num], x/10+(num*15), y/10);
  text(string2[num], x/10+(num*15), y/7);
  text(string3[num], x/10+(num*15), y/7+25);
  text(string4[num], x/10+(num*15), y/7+65);

  num+=1;

for (let i = 0; i < y; i++) {
  color(59,255,75);
  let r = random(50);
  stroke(r * 2);
  line(x-50, i, (x-50) + r, i);
    stroke(r * 2);
    rotate(PI/180);
  line(50, i, 50 + r, i);
}
  stroke(255);

}
