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
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if ((hacker1.length = hacker2.length)) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
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

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely");
} else if ((hacekr1 = hacker2)) {
  console.log("Wghat?! You both have the same name?");
}

//Bonus 1:
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sem at urna pellentesque vestibulum quis ac sem. Suspendisse faucibus mauris quam, a fringilla dui lobortis ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean consequat orci ut nisi posuere, in feugiat sapien accumsan. Donec et risus nunc. Fusce sed aliquam nulla. In malesuada sagittis ornare. Duis sed mi faucibus, luctus erat quis, pulvinar arcu. Nunc cursus aliquet lectus, vel ullamcorper nisi vehicula eu. Suspendisse imperdiet lorem odio, aliquam commodo dui convallis ut. In vulputate augue vel velit aliquam semper. Praesent finibus nunc nec nulla gravida, vel rhoncus lacus convallis. Donec a dui eget nisl tempor consequat. Nulla massa enim, laoreet eget libero eget, finibus molestie ex. Morbi sed lacus lorem. Pellentesque maximus, augue nec pellentesque porttitor, nibh velit pulvinar lectus, et imperdiet odio odio a nisi. Suspendisse sit amet viverra ipsum, ut lobortis justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum sollicitudin fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque dui diam, pellentesque et nibh nec, pellentesque facilisis massa. Nam ante velit, faucibus iaculis blandit vitae, dignissim sit amet massa. Nulla placerat risus at sapien tempus sollicitudin. Curabitur vel nisl eu velit consectetur fermentum. Phasellus a cursus ipsum. Aliquam sit amet egestas ligula, eget lobortis arcu. Quisque quam nunc, laoreet et leo vehicula, scelerisque ornare libero. Vivamus gravida nisl ut justo dignissim, eu vestibulum eros aliquam. Quisque non orci nec magna tempor commodo. Aliquam ultrices sem nec ex elementum rutrum eu vitae nisl. Morbi gravida a sapien vel rutrum. Etiam ut vestibulum elit. Nulla vitae pretium augue. Vestibulum porttitor dolor in magna lobortis aliquam. Phasellus id enim ac diam viverra pellentesque vel eget metus. Etiam magna nunc, varius vitae metus ac, sagittis ornare turpis. In hac habitasse platea dictumst. Pellentesque eu blandit felis, in consectetur quam. Maecenas dapibus orci et mauris congue, id facilisis velit varius. In at orci in ex finibus dictum. Sed interdum auctor libero nec vestibulum. ";

console.log(lorem.split("").length);
console.log(lorem.split("et").length);

//Bonus 2:
const phraseToCheck = "taco cat";

for (let i = 0; i < phraseToCheck.length; i++) {
  console.log(phraseToCheck[i]);
  if {
  }
}
