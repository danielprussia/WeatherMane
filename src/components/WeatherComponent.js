import React, { useState, useEffect } from 'react';
import { callApi } from './api';

function WeatherComponent() {
  const [city, setCity] = useState(''); // State for the city search query
  const [temperature, setTemperature] = useState(null); // State for the temperature

  useEffect(() => {
    if (city !== '') {
      callApi(city)
        .then(data => {
          // Retrieve the temperature from the API response
          const temperature = data.list[0].main.temp;
          setTemperature(temperature);
        })
        .catch(error => {
          // Handle any errors
          console.error('API Error:', error);
        });
    }
  }, [city]);

  const handleSearch = () => {
    // Call the API when the search button is clicked
    setTemperature(null); // Reset temperature to null before new search
    // You can add additional validation or error handling for the city input here if needed
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={event => setCity(event.target.value)}
        placeholder="Enter a city"
      />
      <button onClick={handleSearch}>Search</button>
      {temperature !== null ? (
        <p>Temperature: {temperature}°F</p>
      ) : (
        <p>No temperature data available</p>
      )}
    </div>
  );
}

export default WeatherComponent;
