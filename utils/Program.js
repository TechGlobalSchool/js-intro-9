class Program {
    static gotoApp() {
        return new Promise((resolve, reject) => {    
            setTimeout(() => {
                console.log('This is gotoApp method running!');
                const network = true;
                if(network) resolve('You are on APP!');
                else reject('ERROR: no network!');
            }, 1000);
        })
    }
    
    static clickOnButton() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('This is clickOnButton method running!');
                const buttonEnabled = true;
                if(buttonEnabled) resolve('Button is clicked!');
                else reject('ERROR: button is not displayed!');
            }, 2000);
        })
    }

    static closeApp() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('This is closeApp method running!');
                const done = true;
                if(done) resolve('APP is closed!');
                else reject('ERROR: APP is still running!');
            }, 1000);
        })
    }
}

module.exports.Program = Program;