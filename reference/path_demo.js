const path = require("path");

// Base file name

console.log(__filename);
// /Users/alexwaller/codeMentorPractice/risingDoughNode3/reference/path_demo.js

console.log(path.basename(__filename));
// path_demo.js

// Directory name
console.log(path.dirname(__filename));
// /Users/alexwaller/codeMentorPractice/risingDoughNode3/reference

// File extension
console.log(path.extname(__filename));
// .js

// Create path object
console.log(path.parse(__filename));
/* 

{
    root: '/',
    dir: '/Users/alexwaller/codeMentorPractice/risingDoughNode3/reference',
    base: 'path_demo.js',
    ext: '.js',
    name: 'path_demo'
}

*/

// can call on object's properties just like every
// other object in JavaScript
console.log(path.parse(__filename).ext);
// .js

console.log(path.parse(__filename).base);
// path_demo.js

// Concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
// Users/alexwaller/codeMentorPractice/risingDoughNode3/reference/test/hello.html
