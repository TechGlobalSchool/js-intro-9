
const num1 = UIModule.getNum1();

const operator = UIModule.getOperator();


switch(operator) {
  case '+':
    console.log(MATHModule.add(num1, num1))
  // keep adding more operators
  
  default: 
  console.log('Something is wrong')
}

// Display result