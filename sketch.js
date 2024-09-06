let posicaoXbolinha=200 //fornece a posicao X da bolinha
let posicaoYbolinha=200 //fornece a posicao Y da bolinha
let diametro=50
let cor 
function setup() {
  createCanvas(400, 400);
  cor=color(random(0,255), random(0,255), random(255))
  background(140,255,255);
}

  function draw(){
  
  
  circle (posicaoXbolinha,posicaoYbolinha,diametro)
  
  fill(cor)
  if(mouseIsPressed){
    cor=color(random(0, 255), random(0, 255), random(0, 255))
}
  }

