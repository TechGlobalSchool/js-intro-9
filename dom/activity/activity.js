/**
 * bmi = weight / height ^ 2
 */

// Step 1
// Get elements
// input, btn, result
const heightEl = document.getElementById('height');
const weightEl = document.getElementById('weight');
const btnEl = document.querySelector('button');
const resultsEl = document.querySelector('#results');

// Attach an event
btnEl.addEventListener('click', (e) => {
    e.preventDefault();
    const heightValue = parseFloat(heightEl.value);
    const weightValue = parseFloat(weightEl.value);

    if(heightValue === '' || heightValue === undefined || isNaN(heightValue) || heightValue < 0) {
        resultsEl.innerHTML = 'Please provide height value'
    }else if(weightValue === '' || weightValue === undefined || isNaN(weightValue) || weightValue < 0) {
        resultsEl.innerHTML = 'Please provide weight value'
    }
     else {
        const bmi=  weightValue / ((heightValue / 100) ** 2);
        resultsEl.innerHTML = bmi;
    }
})