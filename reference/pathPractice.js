// pathPractice.js

console.log(__filename);

console.log(__dirname);

const path = require("path");
// must always require "path" to gain access to
// path's methods

console.log(path.basename(__filename));
// pathPractice.js

console.log(path.dirname(__filename));

// this is the same as logging the __dirname directly

// file extension
console.log(path.extname(__filename));
// .js
// .extname will tell you the type of file it is

// Create path object
console.log(path.parse(__filename));
/* 

{
   root: '/',
   dir: 
   base: 'pathPractice.js',
   ext: '.js',
   name: 'pathPractice
}

*/

// can call on individual properties of path object just like typical
// JavaScript object

console.log(path.parse(__filename).root);
//       /

console.log(path.parse(__filename).dir);

console.log(__dirname);

console.log(path.parse(__filename).base);
// pathPractice.js

console.log(path.parse(__filename).ext);
// .js

console.log(path.parse(__filename).name);
// pathPractice

// Concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));

const mellonTechPath = path.join(__dirname, "robots", "mellonTech.js");

console.log(mellonTechPath);

console.log(path.dirname(mellonTechPath));

console.log(path.parse(mellonTechPath));
/* 

{
    root: '/',
    dir: 
    base: 'mellonTech.js',
    ext: '.js',
    name: 'mellonTech'
}

*/

console.log(path.parse(mellonTechPath).root);
// /

console.log(path.parse(mellonTechPath).dir);

console.log(path.dirname(mellonTechPath));

console.log(path.parse(mellonTechPath).base);
// mellonTech.js

console.log(path.parse(mellonTechPath).ext);
// .js

console.log(path.parse(mellonTechPath).name);
// mellonTech

console.log(typeof path.parse(mellonTechPath).name == "string");
// string

console.log(typeof path.parse(mellonTechPath).ext);
// string

const hank44Path = path.join(__dirname, "robot", "hank_44.css");

console.log(hank44Path);

console.log(path.dirname(hank44Path));

console.log(path.extname(hank44Path));
// .css

console.log(path.parse(hank44Path));
/* 

{
    root: '/',
    dir: 
    base: 'hank_44.css',
    ext: '.css',
    name: 'hank_44'
}

*/

console.log(path.parse(hank44Path).base);
// hank_44.css

console.log(path.parse(hank44Path).ext);
// .css

console.log(path.parse(hank44Path).name);
// hank_44

console.log(typeof hank44Path == "string");
// true

console.log(typeof hank44Path);
// string

const greenEgg = path.join(__dirname, "reference", "robot", "greenEgg.html");

console.log(greenEgg);

const greenEgg2 = path.join(__dirname, "robot", "greenEgg.html");

console.log(greenEgg2);

console.log(path.parse(greenEgg2));
/* 

{
    root: '/',
    dir: 
    base: 'greenEgg.html',
    ext: '.html'
    name: 'greenEgg'
}

*/

console.log(path.parse(greenEgg2).name);
// greenEgg

console.log(path.parse(greenEgg2).ext);
// .html

function extensionType(pathName) {
  switch (path.parse(pathName).ext) {
    case ".html":
      return `${path.parse(pathName).name} has a html extension`;

    case ".js":
      return `${path.parse(pathName).name} has a JavaScript extension`;

    case ".css":
      return `${path.parse(pathName).name} has a css extension`;
  }
}

console.log(extensionType(greenEgg2));
// greenEgg has a html extension

console.log(extensionType(mellonTechPath));
// mellonTech has a JavaScript extension

console.log(extensionType(hank44Path));
// hank_44 has a css extension
