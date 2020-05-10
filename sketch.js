var sun,sunImage,earth,earthImage,pickcity,pickcityImage,alia,aliaImage,uran,uranImnage,van,vanImage








function preload(){
  sunImage=loadImage('images/Sun.jpg')
  earthImage=loadImage('images/Earth.jpg')
  pickcityImage=loadImage('images/pickcity.jpg')
  aliaImage=loadImage('images/alia.jpg')
  vanImage=loadImage('images/van.jpg')
 uranImage=loadImage('images/uran.jpg')
}




function setup() {
  createCanvas(1200,800);
  sun=createSprite(10,10,200,200)
  sun.addImage(sunImage)
  sun.scale=0.5
  sun.setCollider('circle',0,0,100)
sun.debug= true

earth=createSprite(350,250,40,40)
  earth.addImage(earthImage)
  earth.scale=0.2

  pickcity=createSprite(380,300,40,40)
  pickcity.addImage(pickcityImage)
  pickcity.scale=0.2

  alia=createSprite(410,340,40,40)
  alia.addImage(aliaImage)
  alia.scale=0.1

  uran=createSprite(500,455,40,40)
  uran.addImage(uranImage)
  uran.scale=0.1

  van=createSprite(470,360,40,40)
  van.addImage(vanImage)
  van.scale=0.1


}

function draw() {
  background(0000);
  if (frameCount%50===0) {
    sun.scale=sun.scale+0.2
  } 
  if (sun.collide(earth)) {
    earth.destroy()
  }
 
  if (pickcity.collide(pickcity)) {
    pickcity.destroy()
  }
  if (alia.collide(alia)) {
    alia.destroy()
  }

  if (van.collide(van)) {
    van.destroy()
  }

  if (uran.collide(uran)) {
    uran.destroy()
  }
 
    
   
  drawSprites();
}