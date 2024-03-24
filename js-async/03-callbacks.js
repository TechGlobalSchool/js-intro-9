function method1(callback) {
  // login functionality that runs in 5 seconds
  setTimeout(() => {
    console.log("LOGIN");
    callback();
  }, 5000);
}

function method2(callback) {
  // navigate to profile
  setTimeout(() => {
    console.log("NAVIGATE TO PROFILE");
    callback();
  }, 1000);
}

function method3(callback) {
  setTimeout(() => {
    console.log("UPDATE PROFILE PICTURE");
    callback();
  }, 3000);
}

function method4() {
  setTimeout(() => {
    console.log("YOUR PROFILE IS SUCCESSFULLY UPDATED!");
  }, 2000);
}

// Using callbacks to handle the asynchronous issue
function program() {
  method1(() => {
    method2(() => {
      method3(() => {
        method4();
      });
    });
  });
}

program();