/**
 * Calculate BMI
 * Formula: bmi = weight / ((height / 100) ** 2)
 */

// Step 1: Get elements
const heightEl = document.getElementById('height');
const weightEl = document.getElementById('weight');
const btnEl = document.querySelector('button');
const resultsEl = document.querySelector('#results');

// Step 2: Attach an event to btn
btnEl.addEventListener('click', (e) => {
    e.preventDefault();
    const heightValue = parseFloat(heightEl.value);
    const weightValue = parseFloat(weightEl.value);

    // Step optional: Check  edge cases
    if(heightValue === '' || heightValue === undefined || isNaN(heightValue) || heightValue < 0) {
        resultsEl.innerHTML = 'Please provide height value'
    }else if(weightValue === '' || weightValue === undefined || isNaN(weightValue) || weightValue < 0) {
        resultsEl.innerHTML = 'Please provide weight value'
    }
     else {
        // Step 3: Calculate bmi
        const bmi=  weightValue / ((heightValue / 100) ** 2);
        // Step 4: Show in UI
        resultsEl.innerHTML = bmi;
    }
})