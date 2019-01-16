// To grab the default and named exports both, we import them like below
import myCurrentLocation, {getGreeting, message,name} from "./myModule";
// To grab just the default export, we can use it like below
// import myCurrentLocation from "./myModule";

import myAddFunction, {subtract} from "./math"

console.log(message);
console.log(name);
console.log(myCurrentLocation);
console.log(getGreeting('Jessica'));

console.log(myAddFunction(1, -2));
console.log(subtract(10,2));