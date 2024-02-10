let weekend = !false;
let weather = 70;
let moviePerfect = false;

if(weekend) {
    if(weather > 70) {
        console.log('Outdoor concert');
    }
    else {
        console.log('Hackathon');
    }
}
else {
    if(moviePerfect) {
        console.log('Movie');
    }
    else if(weather > 70) {
        console.log('Golf');
    }
    else {
        console.log('GYM');
    }
}



let price = 0;
let brand = 'iPhone';
let ssd = 64;
let color = 'White';

if(brand === 'iPhone') {
    price += 750;
    if(ssd === 32) {
        price += 10;
    }
    else if(ssd === 64) {
        price += 18;
    }
    else if(ssd === 128) {
        price += 25;
    }
    else if(ssd === 256) {
        price += 35;
    }
    else {
        price += 50;
    }

    if(color !== 'White') {
        price += 100;
    }
}
else {
    price += 500;
    if(ssd === 32) {
        price += 8;
    }
    else if(ssd === 64) {
        price += 15;
    }
    else if(ssd === 128) {
        price += 20;
    }
    else if(ssd === 256) {
        price += 30;
    }
    else {
        price += 40;
    }

    if(color !== 'White') {
        price += 50;
    }
}

console.log('The total price = $' + price); // 590