// pathPractice.js

console.log(__filename);
// /Users/alexwaller/codeMentorPractice/risingDoughNode3/reference/pathPractice.js

console.log(__dirname);
// /Users/alexwaller/codeMentorPractice/risingDoughNode3/reference

const path = require("path");
// must always require "path" to gain access to
// path's methods

console.log(path.basename(__filename));
// pathPractice.js

console.log(path.dirname(__filename));
// /Users/alexwaller/codeMentorPractice/risingDoughNode3/reference
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
   dir: '/Users/alexwaller/codeMentorPractice/risingDoughNode3/reference',
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
// /Users/alexwaller/codeMentorPractice/risingDoughNode3/reference

console.log(__dirname);
// /Users/ alexwaller/codeMentorPractice/risingDoughNode3/reference

console.log(path.parse(__filename).base);
// pathPractice.js

console.log(path.parse(__filename).ext);
// .js

console.log(path.parse(__filename).name);
// pathPractice

// Concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
// /Users/alexwaller/codeMentorPractice/risingDoughNode3/reference/test/hello.html

const mellonTechPath = path.join(__dirname, "robots", "mellonTech.js");

console.log(mellonTechPath);
// /Users/alexwaller/codeMentorPractice/risingDoughNode3/reference/robots/mellonTech.js

console.log(path.dirname(mellonTechPath));
// /Users/alexwaller/codeMentorPractice/risingDoughNode3/reference/robots

console.log(path.parse(mellonTechPath));
/* 

{
    root: '/',
    dir: '/Users/alexwaller/codeMentorPractice/risingDoughNode3/reference/robots',
    base: 'mellonTech.js',
    ext: '.js',
    name: 'mellonTech'
}

*/

console.log(path.parse(mellonTechPath).root);
// /

console.log(path.parse(mellonTechPath).dir);
// /Users/alexwaller/codeMentorPractice/risingDoughNode3/reference/robots

console.log(path.dirname(mellonTechPath));
// /Users/alexwaller/codeMentorPractice/risingDoughNode3/reference/robots

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
// /Users/alexwaller/codeMentorPractice/risingDoughNode3/reference/robot/hank_44.js

console.log(path.dirname(hank44Path));
// /Users/alexwaller/codeMentorPractice/risingDoughNode3/reference/robot
