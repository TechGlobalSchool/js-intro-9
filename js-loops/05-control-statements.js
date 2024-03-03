// We don't want to see 6 and 13
// We don't like to get any number that 15 or more

for(let i = 1; i <= 20; i++) {
    if(i === 6 || i === 13) continue;
    else if(i === 15) break;
    console.log('The number is', i);
}