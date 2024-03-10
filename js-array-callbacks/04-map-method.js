const sentences = ['Good morning', 'I like arrays', 'It is Sunday'];

// each sentence's first word -> ['Good', 'I', 'It'];
/*
Solution with loops

const newArr = [];

for(const sentence of sentences) {
    // newArr.push(sentence.split(' ')[0]);
    newArr.push(sentence.slice(0, sentence.indexOf(' ')));
}
*/

// Solution with map() method

// const newArr = sentences.map(function (sent) {
//     return sent.split(' ')[0]
// });

const newArr = sentences.map(x => x.split(' ')[0]);

console.log(sentences);
console.log(newArr);


// each sentence's last word -> ['morning', 'arrays', 'Sunday']; Good morning

const lastWords = sentences.map(sentence => sentence.split(' ').at(-1));
//const lastWords = sentences.map(sentence => sentence.slice(sentence.lastIndexOf(' ') + 1));
//const lastWords = sentences.map(sentence => sentence.split(' ').slice(-1)).flat();
//const lastWords = sentences.map(sentence => sentence.split(' ').pop());

console.log(lastWords);


const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];

// Create a new array storing the given salaries with 2 decimals -> [1000.23, 5234.35, 721.98, 3452.50]

const newSalaries = salaries.map(salary => Number(salary.toFixed(2)));

console.log(newSalaries); // [ 1000.23, 5234.35, 721.98, 3452.5 ]