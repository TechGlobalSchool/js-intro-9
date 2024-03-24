const { Program } = require("./../utils/Program.js");

// Program.gotoApp();
// Program.clickOnButton();
// Program.closeApp();

// Promise handling
// function test1() {
//     Program.gotoApp()
//     .then((data) => {
//         console.log(data);
//         Program.clickOnButton()
//         .then((data) => {
//             console.log(data);
//             Program.closeApp()
//             .then((data) => {
//                 console.log(data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }

// test1();


// async await handling 
async function test2 () {
    try {
        await Program.gotoApp();
        await Program.clickOnButton();
        await Program.closeApp();
    } catch(err) {
        console.log(err);
    }
}

test2();