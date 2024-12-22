fetch('data.json')
  .then(response => response.json())
  .then(data => {
    substitute(data.json, "overide", "true")
    console.log(data);
  })
  .catch(error => console.error('Error fetching or parsing JSON:', error));

