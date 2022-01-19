//this is Left Wall of Giverny of the Midwest. Probably called "Generative Giverny Genesis"

// these are the variables you can use as inputs to your algorithms
//console.log(fxhash)   // the 64 chars hex number fed to your algorithm
//onsole.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

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
let startx=[];
let wid=[]
let srcStartx=[];
let srcStarty=[];
let srcWid=[];
let img = [];
let srcHt = [];
let NumSlices;

function preload() {
  NumSlices = int(fxrand()*12)+4; // min 4 max 14 slices
  for(i = 0; i < NumSlices+1; i++){
    //make non-repeating?

  img[i] = loadImage('./library/L'+int(fxrand()*30)+'.jpg');

  srcStartx[i] = int(fxrand() *img[i].width*.75);
  srcStarty[i] = int(fxrand() *img[i].height*.25);
  srcWid[i] = int((fxrand() *(30000/img[i].width)));
  srcHt[i] = int(img[i].height * ((fxrand() * .65) + .25));
}}


function setup() {
background(128);
  createCanvas(windowWidth, windowHeight);

startx[NumSlices]=0;
wid[NumSlices] = (fxrand()*.4)+.001;
    for(i = NumSlices-1; i > 0; i--){
        startx[i]=startx[i+1]+wid[i+1];
        wid[i] = Math.min(Math.max(fxrand()*(1.-startx[i])*.4,.009),.3);
    }
    startx[0]=startx[1]+wid[1];
    wid[0] = (1.-startx[0]);

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

//THIS WORKS!!!!
  /*startx = int(fxrand() *width);
  wid = int((fxrand() *width*.5));
  srcStartx = int(fxrand() *img.width);
  srcWid = int((fxrand() *img.width*.5));
  image(img[0], startx, 0, wid, height, srcStartx, 0, srcWid, img.height);*/
  // 0 zeros always 0. height always height

  for(i = 0; i < NumSlices+1; i++){

image(img[i], startx[i]*width, 0, wid[i]*width, height, srcStartx[i], srcStarty[i], srcWid[i]*.5*wid[i], srcHt[i]);
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
