// Factorial

// 3! = 3*2*1 = 6

// Recursion solution
// TC: O(n)
// SC: O(n)
function factorial(n) {
  // base case
  if(n <= 1) return 1;
  // recursive steps that lead to base case
  return n * factorial(n - 1)
}
factorial(3);


// TC: O(n)
// SC: O(1)
function factorialIterative(n){
  let result = 1; // O(1), O(1)
  for (let i = 2; i <= n; i++) { // O(n), nothing
    result *= i; // O(1)
  }
  return result;
}

