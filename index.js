console.log("Hello Oa");
// Hello Oa
const mellonTech = require("./mellonTech");
console.log(mellonTech);
const Clone = require("./clone");

let clone1 = new Clone("Gerard", "Oryx");

const Math = require("./math");

let math1 = new Math();

/* 

{
    name: 'Mellon-Tech',
    homeTown: 'Raritan, New Jersey',
    skills: 'Guitar Playing and Repair
}

*/
console.log(mellonTech.name);
// Mellon-Tech
console.log(mellonTech.homeTown);
// Raritan, New Jersey
console.log(clone1.greetingClone());
// Welcome to the world, Gerard! You are a
// Oryx clone
console.log(math1.sum(3, 4));
// 7
console.log(math1.difference(3, 4));
// -1
console.log(math1.product(3, 4));
// 12
console.log(math1.quotient(3, 4));
// 0.75
