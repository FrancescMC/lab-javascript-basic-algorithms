// Iteration 1: Names and Input
//
const hacker1 = "Jordi";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Toni";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length}characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker1.length}characters.`
  );
} else if ((hacker1.length = hacker2.length)) {
  console.log("Wow, you both have equally long names, XX characters!");
}
// Iteration 3: Loops
let nameSeparated = "";
for (let i = 0; i < hacker1.length; i++) {
  nameSeparated += hacker1[i].toUpperCase() + " ";
}
console.log(nameSeparated);

let nameReverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  nameReverse += hacker1[i];
}
console.log(nameReverse);
