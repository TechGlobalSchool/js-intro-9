fetch('https://tech-global-training.com/students')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON data
  })
  .then(data => {
    console.log(data); // Log the result to the console
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });