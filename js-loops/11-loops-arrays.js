// Find the first city that has the odd length  -> Chicago
const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

let firstOddLengthCity;

for(const city of cities) {
    if(city.length % 2 !== 0) {
        firstOddLengthCity = city;
        break;
    }
}

console.log(firstOddLengthCity);

// Find all the cities that has length more than 5 -> [ 'Berlin', 'Chicago', 'Istanbul' ]

const citiesWithLength6orMore = [];

for(const city of cities) {
    if(city.length >= 6) citiesWithLength6orMore.push(city);
}

console.log(citiesWithLength6orMore); // [ 'Berlin', 'Chicago', 'Istanbul' ]


// Find all the cities that has i or I in it -> [ 'Berlin', 'Chicago', 'Kyiv', 'Istanbul' ]

const citiesWithI = [];

for(const city of cities) {
    if(city.toLowerCase().indexOf('i') >= 0) citiesWithI.push(city);
}

console.log(citiesWithI);