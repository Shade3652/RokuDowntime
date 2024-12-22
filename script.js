fetch('/data.json')
  .then(response => response.json())
  .then(data => {
    // Do something with the parsed JSON data
    console.log(data);
  })
  .catch(error => console.error('Error fetching or parsing JSON:', error));
