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
