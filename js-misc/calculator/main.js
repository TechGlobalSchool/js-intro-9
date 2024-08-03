// Display result

(function() {
  const num1 = UIModule.getNumberOneFromUser();

  const operator = UIModule.getOperator();
  
  
  switch(operator) {
    case '+':
      console.log(MATHModule.add(num1, num1))
    // keep adding more operators
    
    default: 
    // Handle this properly
    console.log('Something is wrong')
  }
})()


