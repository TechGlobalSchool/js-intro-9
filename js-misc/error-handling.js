// TRY CATCH FINALLY

const API = 'https://jsonplaceholder.typicode.com/users';

// fetch 
// - built-in tool to call api 
// - it requires API url as an argument
// - returns Promise
// - You have to resolve it

// Get users
async function getUsers() {
  try {
    const users = await fetch(API);
    return users;
  } catch(err) {
    // console.log('ERR', err);
    return 'ERRROR'
  } finally {
    // console.log("FINALLY")
    return 'FINALLY'
  }
}

// Handle async code using Promise
getUsers()
.then(res => res.json())
.then(data => console.log(data))

// async function logUsers(){
//   const users = await getUsers();
//   console.log(users);
// }