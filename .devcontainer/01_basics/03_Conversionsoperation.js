let score = 33;
console.log(typeof score);
let scoreStr = String(score);
console.log(typeof scoreStr);
console.log(scoreStr);

console.log("\n");

let scorea = "33abc";
console.log(typeof scorea);
let scoreaStr = Number(scorea);
console.log(typeof scoreaStr);
console.log(scoreaStr);

console.log("\n");

let scoreb = "33abc";
console.log(typeof scoreb);
let scorebStr = String(scoreb);
console.log(typeof scorebStr);
console.log(scorebStr);

console.log("\n");

let scorec = null;
console.log(typeof scorec);
let scorecStr = String(scorec);
console.log(typeof scorecStr);
console.log(scorecStr);

console.log("\n");

let scored = null;
console.log(typeof scored);
let scoredStr = Number(scored);
console.log(typeof scoredStr);
console.log(scoredStr);

/* for number and string
let scoree = "33abc"; --> NaN
let scoree = "33"; --> 33
let scoree = ""; --> 0
let scoree = null; --> 0
let scoree = undefined; --> NaN
*/

console.log("\n");

let scoree = undefined;
console.log(typeof scoree);
let scoreeStr = Number(scoree);
console.log(typeof scoreeStr);
console.log(scoreeStr);

console.log("\n");

let isboolean = 1;
console.log(typeof isboolean);
let isbooleanStr = String(isboolean);
console.log(typeof isbooleanStr);
console.log(isbooleanStr);  

console.log("\n");

let isbooleana = "anshika";
console.log(typeof isbooleana);
let isbooleanaStr = Boolean(isbooleana);
console.log(typeof isbooleanaStr);
console.log(isbooleanaStr);

/* for boolean 
let isbooleanb = ""; --> false
let isbooleanb = "anshika"; --> true
let isbooleanb = 0; --> false
let isbooleanb = 1; --> true
let isbooleanb = null; --> false
let isbooleanb = undefined; --> false
*/

console.log("\n");

let isbooleanb = undefined;
console.log(typeof isbooleanb);
let isbooleanbStr = Boolean(isbooleanb);
console.log(typeof isbooleanbStr);
console.log(isbooleanbStr);

console.log("\n");

let obj = null;
console.log(typeof obj);
let objStr = String(obj);
console.log(typeof objStr);
console.log(objStr);

