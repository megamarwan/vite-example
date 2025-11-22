// 1. Define the API endpoint (URL)
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// 2. Use the fetch() API to request data
fetch(apiUrl)
  .then(response => {
    // 3. Check if the request was successful (status code 200-299)
    if (!response.ok) {
      // Throw an error if the status is not ok
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // 4. Parse the JSON body of the response
    return response.json();
  })
  .then(data => {
    // 5. Use the retrieved data
    console.log('Successfully fetched users:');
    
    // Log the first user's name as an example
    console.log(`First user's name: ${data[0].name}`); 
    
    // You could update the webpage here with the data
    // e.log. document.getElementById('output').innerHTML = data.map(u => `<li>${u.name}</li>`).join('');
  })
  .catch(error => {
    // 6. Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });