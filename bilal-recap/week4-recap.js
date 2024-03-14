
//Task - Print every letter of name on a seperate line
//name = "Bilal"
//Expected:
//B
//i
//l
//a
//l
let name = "Bilal";

for(let i = 0; i < name.length; i++){
    console.log(name.at(i))
}

//Task - reverse a string

let str = "helloWorld"
let reveredStr = "";

for(let i = str.length; i >= 0; i--){
    console.log(str.at(i))
}

//Arrays

let nameArr = ["B", "i", "l", "a", "l"]
name = "Bilal";


console.log(nameArr.join(' | '))
console.log(name.split(''))


let arr = [1,2,3,4,5]
console.log(`original arr : ${arr}`)//original arr : 1,2,3,4,5

arr.push(6)//add 6 to the arr
console.log(`pushed arr : ${arr}`)//pushed arr : 1,2,3,4,5,6

arr.pop()// removes the last index of the arr
console.log(`popped arr : ${arr}`)//popped arr : 1,2,3,4,5

arr.shift()// removes the first index of the arr
console.log(`shifted arr : ${arr}`)//shifted arr : 2,3,4,5

arr.unshift(1)// adds to the beginning of the arr
console.log(`unshifted arr : ${arr}`)//undhifted arr : 2,3,4,5

arr.splice(2, 1, 2)// removes a specific index of the arr
console.log(`spliced arr : ${arr}`)//spliced arr : 2,3,4,5


let nestedArr = [
    [1,2,3,4,5],
    [6,7,8,9,10]
]

console.log(nestedArr)
console.log(nestedArr.flat())





