// fs_demo.js

const fs = require("fs");
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//   if (err) throw err;
//   console.log("Folder Created...");
// });

// Create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!\n",
  err => {
    if (err) throw err;
    console.log("File Written To..");
  }
);

fs.appendFile(
  path.join(__dirname, "/test", "hello.txt"),
  "I love Node.js",
  err => {
    if (err) throw err;
    console.log("File Written To...");
  }
);

// Read File
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
  // Hello World!
});
