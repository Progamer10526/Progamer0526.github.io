// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let myBook;
let bookshelf = []
let type;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //myBook = new Book("Harry","Me",2252,"hardcover",515,width*0.3);
  for(let book = 0; book<= 20;book++){
    random(0,2);
    switch(type){
      case 0:
        type = "softcover"; break;
    }
    bookshelf.push(new Book());
  }
}

function draw() {
  background(220);
 for(let book of bookshelf){
  book.dsiplay();

  
 }
}


class Book {
  constructor(title, author, isbn, cover, pages, x) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;
    this.pickedup = false;
  }

  dsiplay() {
    rectMode(CENTER); textAlign(CENTER);
    textSize(20);
    switch (this.cover) {
      case "softcover":
        fill(250, 200, 150); break;
      case "hardcover":
        fill(120, 2225, 225); break;
      case "leatherbound":
        fill(150, 100, 15); break;
    }
    push();
    translate(this.x, height/2);
    rect(0,0,this.pages/10,150);
    fill(250);
    text(this.title[0],0,-50);
    pop();
  }

  mouseclickt(){
    if(mouseX <= this.x + (this.pages/20) && mouseX >= this.x - (this.pages/20) && mouseIsPressed){
      this.x = mouseX;
    }

   
  }


}