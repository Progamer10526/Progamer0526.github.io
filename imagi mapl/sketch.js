
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
  image(pilot, 0, 0) 
   // if(stared){
  // image(pilot, 0, 0)
  loadPixels(); 
    
  background(0);
  // textImage();
  // }
//  removegreen()
absolute();

  updatePixels();
}

function textImage(){
  fill(255);
  let scalefactor =5;
  textSize(scalefactor)
  for(let x = 0; x < width; x += scalefactor){
    for(let y = 0; y < height; y += scalefactor){
      let avg = getAvg(x, y);
      if(avg > 220)      text("&", x, y);
      else if(avg > 180) text("O", x, y);
      else if(avg > 140) text("/", x, y);
      else if(avg > 100) text("=", x, y);
      else if(avg > 40) text(",", x, y);
    }
  }
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







function boost(){
  // brightening filter
  let boost = map(mouseX, 0, width, -100, 100)
  
    let r = pixels[i] + boost;
    let g = pixels[i + 1] + boost;
    let b = pixels[i + 2] + boost;
    setPixelOneD(i, r, g, b);
  }



function mousePressed(){
  stared = true;

  resizeCanvas(pilot.width,pilot.height,false)
}

function absolute(){
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

  function removegreen(){
    for(let x = 0; x < width; x += 4){
      for(let y = 0; y < height; y += 1){
      if(x >= pilot.width/2){
        let r = pixels[x*y]
        let b = pixels[(x*y) + 2]
        setPixelOneD((x*y), r, 0, b)
      }
      
      
  }}}


async function loadAssets(){
  //pilot = await loadImage("/aviator.png");
  //pilot = await createVideo("/bball.mp4")
  //pilot.hide();
  pilot = await loadImage("/chip.jpg");
  //pilot = await loadImage("/race.jpg");

}