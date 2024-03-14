/*
//Task10
Requirement: 
Write a function named as swapFirstLastWord() 
which takes a string word as an argument and returns 
the string back with its first and last words swapped 
when invoked.

NOTE: Return empty string if the given string does not 
have 2 or more words.

Examples:
swapFirstLastWord("Hello World")  -> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar")  -> "bar bar foo foo"
swapFirstLastWord("")  -> ""
swapFirstLastWord("    ")  -> ""
swapFirstLastWord("Hello")  -> ""
swapFirstLastWord("Hello   ")  -> ""
*/

function swapFirstLastWord(words){
    words = words.trim();
    if(!words.includes(' ')) return "";
    else{
        let firstWord = words.slice(0, words.indexOf(' '));
        let lastWord = words.slice(words.lastIndexOf(' ') + 1);
        let middle = words.slice(words.indexOf(' '), words.lastIndexOf(' ') + 1);
        return lastWord + middle + firstWord;
    }
}

console.log(swapFirstLastWord("Hello World"))
console.log(swapFirstLastWord("I like JavaScript"))
console.log(swapFirstLastWord("foo bar foo bar"))
console.log(swapFirstLastWord(""))
console.log(swapFirstLastWord("    "))
console.log(swapFirstLastWord("Hello"))
console.log(swapFirstLastWord("Hello   "))

/*
//Task09
Requirement: 
Write a function named as swap4() which takes a 
string word as an argument and returns the string back 
with its first and last 4 characters swapped when 
invoked.

NOTE: Return empty string if the given string does not 
have 8 or more characters.

Examples:
swap4("abc")  -> ""
swap4("JavaScript")  -> "riptScJava"
swap4("TechGlobal")  -> "obalGlTech"
swap4("")  -> ""
swap4("    ")  -> ""
swap4("Apple")  -> ""
*/

function swap4(str) {
    str = str.trim();

    if(str.length >= 8){
        let first4 = str.slice(0, 4);
        let middle = str.slice(4, -4);
        let last4 = str.slice(-4);
        return last4 + middle + first4;
    }else{
        return "";
    }
}
console.log(swap4("abc"))//""
console.log(swap4("BilalAlsilwadi"))//wadilAlsilwBila
console.log(swap4("TechGlobal"))
console.log(swap4(""))
console.log(swap4("   "))
console.log(swap4("Apple"))

/*
task08
Requirement:
Write a function named as startVowel() which takes a 
string word as an argument and returns true if given 
string starts with a vowel, and false otherwise when 
invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
Examples:
startVowel("Hello")  -> false
startVowel("Apple") -> true
startVowel("orange")  -> true
startVowel("")  -> false
startVowel("    ")  -> false
startVowel("123")  -> false
*/

function startVowel(str) {
    return "AEIOUaeiou".includes(str[0])

    // let firstChar = str.toLowerCase()[0];
    // return (firstChar === 'a' || firstChar === 'e' ||firstChar === 'i' ||firstChar === 'o' ||firstChar === 'u')

    // let firstChar = str[0];
    // return (firstChar === 'a' || firstChar === 'e' ||firstChar === 'i' ||firstChar === 'o' ||firstChar === 'u' ||
    // firstChar === 'A' ||firstChar === 'E' ||firstChar === 'I' ||firstChar === 'O' ||firstChar === 'U')
}

console.log(startVowel("Hello"))//  -> false
console.log(startVowel("Apple"))// -> true
console.log(startVowel("orange"))//  -> true
console.log(startVowel(""))//  -> false
console.log(startVowel("    "))//  -> false
console.log(startVowel("123"))//  -> false
