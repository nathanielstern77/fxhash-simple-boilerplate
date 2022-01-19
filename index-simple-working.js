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

let seed = 0; //seed Hash
let sizee = 0; // rect size
let col = 0; //color


function setup() {

  createCanvas(windowWidth, windowHeight);


  col=int(fxrand()*255);
  sizee=int(fxrand()*(width/2));

// FX Features
  window.$fxhashFeatures = {
 "Size" : sizee,
 "Color" : col,
  };

}

function draw() {
  background(255);

stroke(0);
fill(col);

rectMode(CENTER);
rect(width/2,height/2,sizee,sizee);

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
