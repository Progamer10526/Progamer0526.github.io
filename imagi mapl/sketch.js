
let pilot;
let stared = false;

function setup() {
  createCanvas(891, 892);// feels bad
  loadAssets();
  pixelDensity(1);
}

function setPixelOneD(pos, r, g, b){
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}

function setPixel(x, y, r, g, b){
 let index = (width*y + x) * 4;
 setPixelOneD(index, r, g, b);
}

function draw() {
  resizeCanvas(pilot.width,pilot.height,false)
  image(pilot, 0, 0) 
  loadPixels(); 
  // FiveColor()
//  removegreen()
//  MajorityColor();
  // mirror()
  rotatepic();
  updatePixels();
}

function getAvg(x, y){
  let i = (width*y + x) * 4;
  let r = pixels[i];
  let g = pixels[i + 1];
  let b = pixels[i + 2];
  return(r+g+b)/3
}

function getcolors(){
  let colrs = []
  let i = (width*y + x) * 4;
  let r = pixels[i];
  let g = pixels[i + 1];
  let b = pixels[i + 2];
  colrs.push(r)
  colrs.push(g)
  colrs.push(b)
  return(colrs)
}

function MajorityColor(){ // set pixel to the highest color value 
  for(let i = 0; i < pixels.length; i += 4){
    let r = pixels[i] ;
    let g = pixels[i + 1] ;
    let b = pixels[i + 2] ;
    if((r > g && r > b) ||( r === g && r>b )){
      setPixelOneD(i, 225, 0, 0)
    }
    else if((g > r && g > b) ||(g === b)){
      setPixelOneD(i, 0, 225, 0)
    }
     else if((b > g && b > r) ){
      setPixelOneD(i, 0, 0, 225)
    }
    }
  }

  function removegreen(){ //removes green color from half of the sceen
    for(let y = 0; y < pilot.height; y += 1){
      for(let x = 0; x  < pilot.width; x += 1){
        let post = (x+ (y*pilot.width))*4
        let r = pixels[post]
        let g =pixels[post+1] ;
        let b = pixels[post+ 2]
       
      if(x >= pilot.width/2){
        g = 0
        setPixelOneD((x +(y*width))*4,r,g,b)
       
      }
      else{
        setPixelOneD((x +(y*width))*4,r,g,b)
      
      }

      
  }}}


  function FiveColor(){ //sets the pixels color to a set value dependidn on brightness
    for(let y = 0; y < pilot.height; y += 1){
      for(let x = 0; x  < pilot.width; x += 1){
      let apl = getAvg(x,y);
      let r = 0;
      let g = 0;
      let b = 0;
      if(apl >=205 && apl <=225){
        r = 170
        g = 230
        b = 220
      }
      else if(apl >=155 && apl <=204){
        r = 105
        g = 150
        b = 210
      }
      else if(apl >=105 && apl <=154){
        r = 120
        g = 180
        b = 60
      }
      else if(apl >=55 && apl <=104){
        r = 130
        g = 30
        b = 130
      }
      else if(apl >=0 && apl <=54){
        r = 90
        g = 10
        b = 90
      }
      setPixelOneD((x +(y*width))*4,r,g,b)

    }}
  }

function mirror(){ //Mirrors the right side of the image 
  
  for(let y = 0; y < pilot.height; y += 1){
    let offset = pilot.width *4
    for(let x = 0; x  < pilot.width; x += 1){
      if(x <pilot.width/2){
        
        let post = ((x+ (y*pilot.width))*4) + offset
        let r = pixels[post]
        let g =pixels[post+1] ;
        let b = pixels[post+2]
        setPixelOneD((x +(y*width))*4,r,g,b)
        offset -= 8
}
}}}

function rotatepic(){
  let pilotClone = structuredClone(pilot)
  let yoffset = pilot.height *4
  for(let y = 0; y < pilot.height; y += 1){
    let xoffset = pilot.width *4
    for(let x = 0; x  < pilot.width; x += 1){
      
      if((x < pilot.width/2) &&(y < pilot.height/2) ){
        let post = ((x+ ((y + yoffset)*pilot.width))*4) 
        let r = pixels[post]
        let g =pixels[post+1] ;
        let b = pixels[post+2]
        setPixelOneD((x +(y*width))*4,r,g,b)
        
      }

    }
    yoffset ++
  }
}

async function loadAssets(){ // loads images 
  //pilot = await loadImage("/aviator.png");
  //pilot = await createVideo("/bball.mp4")
  //pilot.hide();
  // pilot = await loadImage("/chip.jpg");
 // pilot = await loadImage("/race.jpg");
//  pilot = await loadImage("/nuit.jpg");
//  pilot = await loadImage("/hand.jpg");
pilot = await loadImage("/butterfly.jpg");

}