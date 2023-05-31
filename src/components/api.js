export function callApi(location) {
    const requestUrl = `https://api.openweathermap.org/data/2.5/forecast/?q=${location}&appid=4dacd660c3a2d3652f3f05fffb1b0e8d&units=imperial`;
    
    return fetch(requestUrl)
      .then(response => response.json())
      .then(data => {
        // Process the data or return it directly
        return data;
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
        throw error;
      });
  }
  