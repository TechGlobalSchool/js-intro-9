/*
1. Ask user a name => prompt()

    1.1 Alert users name => alert()
    1.2 Console 'You didn't provide your name. Bye Bye' and quit.


2. Confirm if user wants to continie => confirm()
    2.1 If user says 'YES' => Alert 'You have chosen to continue"
    2.2 If user says 'NO' => Alert 'You canceled the action'

3. Console users browser innerWidth and innerHeight

4. Reload the page after 10 seconds to start again
    setTimeout, window.location.reload()
*/

const userName = prompt('What is your name?');

// 1
if(userName) {
    // all the work
    alert(`Welcome ${userName}`);

    // 2
    const doesUserWantsToContinue = confirm('Do you still want to continue?');
    if(doesUserWantsToContinue) {
        alert('You chose to continue')
    } else {
        alert('You chose not to continue')
    }

    // 3
    console.log(`You window dimesnions height: ${innerHeight} and width: ${innerWidth}`);

    // 4
    console.log('Page will be reloading in 5 seconds ...');
    setTimeout(() => location.reload(), 5000)
} else {
    console.log("Bye Bye! Name didn't provide")
}