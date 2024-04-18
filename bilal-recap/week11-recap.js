/*
Requirement:
Write a function named splitString() which takes a string and a number 
arguments and returns the string back split by the given number. 
Note: Return empty string if the string shorter than splitting number or the 
string length is not divisible by the given number.

Examples:
splitString("JavaScript", 5)  -> "JavaS cript"
splitString("Java", 2)  -> "Ja va"
splitString("Automation", 3)  -> ""
splitString("Hello", 6)  -> ""
splitString("12", 1)  -> "1 2"
*/

//Do Not Use
const splitString1 = (str, num) => (str.length > num && str.length % num === 0) ? str.slice(0, num) + ' ' + str.slice(num) : ''
    
const splitString2 = (str, num) => {//12345 67890 98765 -> 12345 67890 98765
    if (str.length % num !== 0 || str.length < num) return '';
    const parts = [];
    for (let i = 0; i < str.length; i += num) {
        parts.push(str.slice(i, i + num));
    }
    return parts.join(' ');
};

const splitString3 = (str, num) => {
    if (str.length % num !== 0) return '';
    
    let result = '';

    for (let i = 0; i < str.length; i++) {
        result += str[i];
        if ((i + 1) % num === 0) result += ' ';
}
return result.trim()
}


console.log(splitString('JavaScript', 5));
console.log(splitString('Java', 2));
console.log(splitString('Automation', 3));
console.log(splitString('Hello', 6));
console.log(splitString('12', 1));
console.log(splitString('123456789012345', 5))


/*
Requirement:
Write a function named reverseNumber() which takes a number argument 
and returns it back reversed without converting it to a String.
Note: Do not convert number to string to complete the task.

Examples:
reverseNumber(371)  -> 173
reverseNumber(123)  -> 321
reverseNumber(12)  -> 21
reverseNumber(0)  -> 0
reverseNumber(111)  -> 111
*/


const reverseNumber = num => {
    let reversed = 0;

    for(let i = num; i > 0; i = Math.floor(i/10)){
        reversed = (reversed * 10) + (i % 10)
    }
    return reversed
}
console.log(reverseNumber(371));
console.log(reverseNumber(123));
console.log(reverseNumber(21));
console.log(reverseNumber(0));
console.log(reverseNumber(111));


/*

Requirement:
Write a function named isArmstrong() which takes a number argument and 
returns true if given number is armstrong, return false otherwise. 
Note: An armstrong number is a number that is equal to the sum of its own 
digits raised to the power of the number of digits. In other words, an n-digit 
number is an Armstrong number if the sum of its digits, each raised to the nth 
power, is equal to the number itself.
Let's take an example to understand it better. Consider the number 153. 
To determine if 153 is an armstrong number, we need to check if the sum of 
its digits, each raised to the power of the number of digits, equals the original 
number. 
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 
In this case, the sum of the individual digits raised to the power of 3 (the 
number of digits in 153) is equal to the original number, which means 153 is 
an armstrong number.
Examples:
isArmstrong(153)  -> true
isArmstrong(123)  -> false
isArmstrong(1634)  -> true -> 1^4 + 6^4 + 3^4 + 4^4 = 1634
isArmstrong(153)  -> true
isArmstrong(1111)  -> false
*/

//0 + 1^3 -> 1
//1 + 5^3 -> 1 + 125 = 126
//126 + 3^3 -> 126 + 27 = 153
const isArmstrong = num => {//153
    const numAsSTR = num.toFixed()//"153"
    const lengthOfNum = numAsSTR.length//3

    let armstring = numAsSTR.split('').reduce((total, i) => total += i ** lengthOfNum ,0)

    return armstring === num
}

console.log(isArmstrong(153));
console.log(isArmstrong(123));
console.log(isArmstrong(1634));
console.log(isArmstrong(1111));


/*
Requirement:
Write a function named calculateTotalPrice2() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total price 
of the given items based on the price list below.
1 Apple is $2.00 
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
Note: There will be some discounts as below .
There will be %50 discount for every second Apple 
There will be 1 free Mango if customer gets 3. So, fourth one is free.
Examples:
calculateTotalPrice2({ Apple: 3, Mango: 5 })  -> 24.96
calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })  -> 45.81
calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })  -> 0
calculateTotalPrice1({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 })  -> 29.51
*/

const calculateTotalPrice2 = items => {
    const menu = {
        Apple : 2.00,
        Orange: 3.29,
        Mango: 4.99,
        Pineapple: 5.25
    }

    let total = 0;

    for(let item in items){
        let noSale = menu[item] * items[item];
        let sale = 0;
        if(item === 'Apple') sale = Math.floor(items['Apple'] / 2) * (menu['Apple']/2)
        if(item === 'Mango') sale = Math.floor(items['Mango'] / 4) * (menu['Mango'])

        total += noSale - sale;
    }

    return total === 0 ? total : total.toFixed(2)
}

const calculateTotalPrice2Way2 = (items) => {
    const prices = {
        Apple: 2.00,
        Orange: 3.29,
        Mango: 4.99,
        Pineapple: 5.25
    };

    let total = 0;
    total += (items.Apple ? Math.ceil(items.Apple / 2) * prices.Apple + Math.floor(items.Apple / 2) * prices.Apple * 0.5 : 0);
    total += (items.Mango ? Math.ceil(items.Mango * 3 / 4) * prices.Mango : 0);
    total += (items.Orange ? items.Orange * prices.Orange : 0);
    total += (items.Pineapple ? items.Pineapple * prices.Pineapple : 0);

    return total.toFixed(2);
};

console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 })); 
console.log(calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })); 
console.log(calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })); 
console.log(calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango: 3 })); 
