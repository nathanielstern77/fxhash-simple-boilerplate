//this is Left Wall of Giverny of the Midwest. Probably called "Generative Giverny Genesis"

// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }

// FH_HASH p5 template | @visiophone_lab
// www.visiophone-lab.com

/*let seed = 0; //seed Hash
let sizee = 0; // rect size
let col = 0; //color */

// Top-left corner of destination rectangle is at (0, 0)
// Destination rectangle width and height are 40 x 20
// The next parameters are relative to the source image:
// - Starting at position (50, 50) on the source image, capture a 50 x 50
// subsection
// - Draw this subsection to fill the dimensions of the destination rectangle
//  image(img, 50, 0, 400, height, 50, 0, 200, img.height);
let startx, wid, srcStartx, srcWid;
let img = [];
let NumSlices = 0;

function preload() {

  for(i = 0; i < 30; i++){
  img[i] = loadImage('./library/L'+i+'.jpg');
}}


function setup() {
background(128);
  createCanvas(windowWidth, windowHeight);
  NumSlices = int(fxrand()*27)+3;

    for(i = NumSlices; i > 0; i--){

    }
/*

  col=int(fxrand()*255);
  sizee=int(fxrand()*(width/2)); */

  //attributes will be: num of images used, images used (long string), signed, maybe animated?

// FX Features
  window.$fxhashFeatures = {
// "Size" : sizee,
 //"Color" : col,
  };

}

function draw() {

/*
stroke(0);
fill(col);

rectMode(CENTER);
rect(width/2,height/2,sizee,sizee); */
//image(img, 0, 0, width, height);
//image(img, 0, 0, [width], [height])
//image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
//Top right image
  // Top-left corner of destination rectangle is at (0, 0)
  // Destination rectangle width and height are 40 x 20
  // The next parameters are relative to the source image:
  // - Starting at position (50, 50) on the source image, capture a 50 x 50
  // subsection
  // - Draw this subsection to fill the dimensions of the destination rectangle

  startx = int(fxrand() *width);
  wid = int((fxrand() *width*.5));
  srcStartx = int(fxrand() *img.width);
  srcWid = int((fxrand() *img.width*.5));
  image(img[0], startx, 0, wid, height, srcStartx, 0, srcWid, img.height);
  // 0 zeros always 0. height always height

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
