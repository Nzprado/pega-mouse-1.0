let cor;
let posicaoHorizontal=200;
  let posicaoVertical=200;
function setup() {
  createCanvas(1100, 1100);
  background("rgb(0,0,0)");
  cor = color(random(0,255),random(0,255),random(0,255));
 }

function draw() {
circle(posicaoHorizontal, posicaoVertical, 50);
   fill(cor);
  
 if(mouseX > posicaoHorizontal) {
   posicaoHorizontal = posicaoHorizontal +1;
 }
  if(mouseX < posicaoHorizontal) {
   posicaoHorizontal = posicaoHorizontal -1;
 }
  if(mouseY > posicaoVertical) {
   posicaoVertical = posicaoVertical +1;
 }
  if(mouseY < posicaoVertical) {
   posicaoVertical = posicaoVertical -1;
 }
  if(mouseIsPressed){cor = color(random(0,255),random(0,255),random(0,255),random(0,100));
    
}
  
}