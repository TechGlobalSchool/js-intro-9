function generateRandomNumber(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maxOfArray(arr) {
    return Math.max(...arr);
}

function minOfArray(arr) {
    return Math.min(...arr);
}

// Exporting your reusable methods one by one
module.exports.generateRandomNumber = generateRandomNumber;
module.exports.maxOfArray = maxOfArray;
module.exports.minOfArray = minOfArray;

// Exporting all the methods as an object 1
// module.exports.MathHelper = {
//     generateRandomNumber,
//     minOfArray,
//     maxOfArray
// }

// Exporting all the methods as an object 2
// const MathHelper = {
//     generateRandomNumber,
//     minOfArray,
//     maxOfArray
// }

// module.exports.MathHelper = MathHelper;


// Exporting methods and fields as a ES6 class
// class MathHelper {
//     static pi = 3.14;
//     static favNumber = 7;
//     static generateRandomNumber(a, b) {
//         let max = Math.max(a, b);
//         let min = Math.min(a, b);
    
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
    
//     static maxOfArray(arr) {
//         return Math.max(...arr);
//     }
    
//     static minOfArray(arr) {
//         return Math.min(...arr);
//     }
// }

// module.exports.MathHelper = MathHelper;