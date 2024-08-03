fetch('https://gorest.co.in/public/v2/users')
  .then(response => {
    //handle response            
    console.log(response);
  })
  .then(data => {
    //handle data
    console.log(data);
    console.log(data.body)
  })
  .catch(error => {
    //handle error
  });