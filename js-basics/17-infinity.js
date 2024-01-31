let var1 = Infinity;
let var2 = -Infinity;
let var3 = 3 / 0; 
let var4 = -5 / 0; 
let var5 = -Infinity * Infinity;
let var6 = -Infinity + Infinity; 
let var7 = -Infinity / Infinity;

console.log(var1); // Infinity
console.log(var2); // -Infinity
console.log(var3); // Infinity
console.log(var4); // -Infinity
console.log(var5); // -Infinity
console.log(var6); // NaN
console.log(var7); // NaN

console.log(0 / 0); // NaN

console.log(typeof NaN); // number
console.log(typeof Infinity); // number
console.log(typeof -Infinity); // number

console.log(isNaN(Infinity)); // false
console.log(isNaN(-Infinity)); // false
console.log(isNaN(NaN)); // true