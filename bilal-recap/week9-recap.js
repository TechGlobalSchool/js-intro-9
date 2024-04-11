/*
Requirement:
Write a function named noXInVariables() which takes an array as argument 
and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove 
the element.

Examples:
noXInVariables(["abc", 123, "#$%"])  -> ["abc", 123, "#$%"]
noXInVariables(["xyz", 123, "#$%"])  -> ["yz", 123, "#$%"]
noXInVariables(["x", 123, "#$%"])  -> [123, "#$%"]
noXInVariables(["xyXyxy", "Xx", "ABC"])  -> ["yyy", "ABC"]
*/

const noXInVariables = arr => {
    return arr.map(el => 
        typeof el === 'string' ? el.split('').filter(ele => ele.toLowerCase() !== 'x').join('') : el
    ).filter(ele => ele)
}
console.log(noXInVariables(["abc", 123, "#$%"]))
console.log(noXInVariables(["xyz", 123, "#$%"]))
console.log(noXInVariables(["x", 123, "#$%"]))
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]))

/*
Requirement:
Write a function named getCommons() which takes two string arrays as 
arguments and returns all the common words.

Examples:
getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) -> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) -> ["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )  -> ["C#"]
*/

const getCommons = (arr1, arr2) => arr1.filter(el => arr2.includes(el)).reduce((commons, el) => !commons.includes(el) ? commons.concat(el) : commons,[])

// let commons = [];

//     for(const el of commonsWithDup){
//         if(!commons.includes(el)) commons.push(el)
//     }

//     return commons
console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"]))
console.log(getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"]))
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"]))

/*
Requirement:
Write a function named removeArraySpecialsDigits() which takes a string 
array as argument and return back without the special characters or digits.

Examples:
removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])  -> ["Javascript", "is", "fun"]
removeArraySpecialsDigits(["Cypress", "123$%", "###"])  -> ["Cypress", "", ""]
removeArraySpecialsDigits(["Automation", "123#$%tool"])  -> ["Automation", "tool"]
*/

const removeArraySpecialsDigits = arr => arr.map(el => el.split('').filter(i => (i.toLowerCase() >= 'a' && i.toLowerCase() <= 'z') || i === ' ').join(''))

console.log(removeArraySpecialsDigits(["123Java   script", "#$   %is", "fun"]))
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]))
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]))

/*
Requirement:
Write a function named reverseSentence() which takes a string as argument 
and returns the words in reverse order.  If there is no enough words reverse, 
return "There is not enough words!".

Examples:
reverseSentence("Hello")  -> "There is not enough words!"
reverseSentence("Javascript is fun")  -> "Fun is javascript"
reverseSentence("This is a sentence")  -> "Sentence a is this"
*/

const reverseSentence = str => {
    if(!(str.trim().includes(' '))) return "There is not enough words!"

    let newStr = str.split(' ').reverse().join(' ').toLowerCase()
    return newStr[0].toUpperCase() + newStr.slice(1)
}

console.log(reverseSentence("Hello"))
console.log(reverseSentence("Javascript is fun"))
console.log(reverseSentence("This is a sentence"))