function gotoAmazon(callback, err) {
    setTimeout(() => {
        let network = true;
        if(network) {
            console.log('Welcome to amazon.com');
            callback();
        }
        else {
            err();
        }
    }, 2000);
}

function searchForProduct(productName, err) {
    setTimeout(() => {
        if(productName.trim().length > 0) console.log(`Here is the results for ${productName}`);
        else err();
    }, 1000);
}

gotoAmazon(() => {
    searchForProduct('Laptop', 
    () => {
        throw Error('Product name cannot be empty!');
    });
}, 
() => {
    throw Error('ERROR occurred while navigating to amazon.com');
});
