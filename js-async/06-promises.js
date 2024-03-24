const myPromise = new Promise((resolve, reject) => {
    if(true) {
        resolve('Fullfilled | Success');
    } 
    else {
        reject('Error | Failure');
    }
});

console.log(myPromise); // Promise { 'Fullfilled | Success' }


const age = new Promise((resolve, reject) => {
    const randomAge = Math.floor(Math.random() * 100) + 1;

    if(randomAge >= 16) {
        resolve(`The age is ${randomAge}`);
    }
    else {
        reject(`Age of ${randomAge} is not allowed!`);
    }
});

// Promise handling 
age.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})


const triple = new Promise((resolve, reject) => {
    const number = 5;
    const mood = true;
    if(mood) {
        resolve(number * 3);
    }
    else {
        reject(0);
    }
});


triple.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})

function double(number) {
    return new Promise((resolve, reject) => {
        const mood = true;
        if(mood) {
            resolve(number * 2);
        }
        else {
            reject(0);
        }
    })
}

double(5).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})