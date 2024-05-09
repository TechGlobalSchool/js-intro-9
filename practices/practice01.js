/*Task1:
Requirement:
Write a program that generates a random number 
between 0 and 50 (both 0 and 50 are included)
Multiply number with 5 and print the result with below 
message
Expected result:
The random number * 5 = {result}
*/

// Math.floor(Math.random() * range) + startPoint

let randomNum = Math.floor(Math.random() * 51)

console.log(randomNum)
// console.log("The random number * 5 = " + randomNum * 5)
console.log(`The random number * 5 = ${randomNum * 5}`)


/*Task2:
Requirement:
Write a program that generates two random numbers 
between 1 and 10 (both 1 and 10 are included)
Find the min number
Find the max number
Find the absolute difference of the numbers

Expected result:
Min number = {min}
Max number = {max}
Difference = {difference}
*/

// Math.floor(Math.random() * range) + startPoint

let random1 = Math.floor(Math.random() * 10) + 1
let random2 = Math.floor(Math.random() * 10) + 1

console.log(random1)
console.log(random2)

console.log("Min number = " + Math.min(random1,random2))
console.log(`Max number = ${Math.max(random1,random2)}`) // Use this way of concatination - String Literals
console.log("Difference = ",Math.abs(random1 - random2)) 

  
/*Task3:
Requirement:
Write a program that generates a random number 
between 50 and 100 (both 50 and 100 are included)
Find the remainder of the number by 10

Expected result:
The random number % 10 = {result
*/

// Math.floor(Math.random() * range) + startPoint

let randomNumber = Math.floor(Math.random() * 51) + 50

console.log(randomNumber)

console.log(`The random number % 10 = ${randomNumber % 10}`)


/*Task4:
Requirement:
Write a program that generates 5 random numbers between 
1 to 10 (1 and 10 are included)
Calculate some points based on numbers generated. So, the 
points will be calculated as below
1st  number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points

Test data:
3 7 2 1 8
Expected result:
59
*/
let points = 0;

let rand1 = Math.floor(Math.random() * 10) + 1
points += rand1 * 5

let rand2 = Math.floor(Math.random() * 10) + 1
points += rand2 * 4

let rand3 = Math.floor(Math.random() * 10) + 1
points += rand3 * 3

let rand4 = Math.floor(Math.random() * 10) + 1
points += rand4 * 2

let rand5 = Math.floor(Math.random() * 10) + 1
points += rand5


console.log(rand1,rand2,rand3,rand4,rand5)
console.log(points)

/*Task5:
Requirement:
Write a program that generates 4 random numbers as 
below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)
Find the absolute difference between the max and min 
number
Find the absolute difference between the second and 
third number
Find the average of all 4 numbers

Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}
*/

// Math.floor(Math.random() * range) + startPoint

rand1 = Math.floor(Math.random() * 25) + 1
rand2 = Math.floor(Math.random() * 25) + 26
rand3 = Math.floor(Math.random() * 25) + 51
rand4 = Math.floor(Math.random() * 25) + 76

console.log(rand1,rand2,rand3,rand4)

let max = Math.max(rand1,rand2,rand3,rand4)
let min = Math.min(rand1,rand2,rand3,rand4)

console.log(`Difference of max and min = ${Math.abs(max - min)}`)
console.log(`Difference of second and third = ${Math.abs(rand2 - rand3)}`)
console.log(`Average of all = ${(rand1 + rand2 + rand3 + rand4) / 4}`)