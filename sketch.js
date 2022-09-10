var camino,boy, borde_izquierdo, borde_derecho;
var caminoImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  caminoImg = loadImage ("path.png"); 
  //loadAnimation de boy (niño)
 boyImg = loadAnimation ("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png"); 
}

function setup(){
  
  createCanvas(400,500);
 //crear sprite de path (camino) 
camino = createSprite (200, 200, 400, 400); 
camino.addImage("path", caminoImg);
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
camino.scale=1.2;

//crear sprite de boy (niño)
boy = createSprite (200, 450, 100, 100); 
//agregar animación para boy
boy.addAnimation("niñocorriendo", boyImg);
boy.scale= 0.8;
  
// crear  left Boundary (límite izquierdo)
borde_izquierdo=createSprite(0,0,100,800);
borde_izquierdo.visible = false; 
////establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
borde_derecho=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
borde_derecho.visible = false; 
}

function draw() {
  background("white");
  camino.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.x = World.mouseX;
  edges= createEdgeSprites();
  boy.collide(edges);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(borde_izquierdo);
  boy.collide(borde_derecho);

//if (boy.isTouching(bomba)){}

  
  //código para reiniciar el fondo
  if(camino.y > 400 ){
    camino.y = height/2;
  }
  
  drawSprites();
}
