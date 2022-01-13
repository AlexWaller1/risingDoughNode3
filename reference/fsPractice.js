// fsPractice.js

const fs = require("fs");

const path = require("path");

console.log(__filename);
// worked! :)

console.log(__dirname);
// worked! :)

// Create Folder
// fs.mkdir(path.join(__dirname, "/test3"), {}, err => {
//   if (err) throw err;
//   console.log("folder created");
// });

// fs.mkdir(path.join(__dirname, "/test4"), () => {
//   console.log("folder created");
// });

// fs.mkdir(path.join(__dirname, "/test2"), () => {
//   console.log("Success!");
// });

let fsInfo1 = `fs.mkdir functions will always have to be deleted or 
commented out because it will try to make the same folder again and
we will get an error`;

// fs.mkdir(path.join(__dirname, "/dachsund.txt"), err => {
//   if (err) throw err;
//   console.log("success");
// });

// write to file

fs.writeFile(
  path.join(__dirname, "/dachshund.txt"),
  "Bodhi Is Awesome!\n",
  err => {
    if (err) throw err;
    console.log("file written to");
  }
);

fs.appendFile(
  path.join(__dirname, "/dachshund.txt"),
  "Beezer is Awesome!\nChipper is Awesome!",
  err => {
    if (err) throw err;
    console.log("file written to");
  }
);

const hammerHead = path.join(__dirname, "hammerHead.js");

console.log(hammerHead);

console.log(path.extname(hammerHead));
// .js

console.log(path.parse(hammerHead));
/* 

root: '/'
dir: =====================================
base: 'hammerHead.js'
ext: '.js'
name: 'hammerHead'

*/

console.log(path.parse(hammerHead).name);
// hammerHead

console.log(path.parse(hammerHead).ext);
// .js

console.log(path.parse(hammerHead).base);
// hammerHead.js

console.log(__filename);

console.log(__dirname);

const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

console.log(robots[2]);
// Mellon-Tech

console.log(typeof path.parse(hammerHead).ext == typeof robots[2]);
// true

const risingDough = ["Rising Dough", "Timber_I0 34"];

fs.writeFile(path.join(__dirname, "/pizza.txt"), "Pizza is Great!\n", err => {
  if (err) throw err;
  console.log("pizzaCool");
});
// writeFile will make the file as well

fs.appendFile(path.join(__dirname, "/pizza.txt"), "Rising Dough", err => {
  if (err) throw err;
  console.log("Rising Dough!");
});
