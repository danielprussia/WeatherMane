import React, { useState } from 'react';
import { callApi } from './api';

function WeatherComponent() {
  const [city, setCity] = useState(''); // State for the city search query
  const [temperatures, setTemperatures] = useState([]); // State for the temperatures

  const handleSearch = () => {
    if (city !== '') {
      callApi(city)
        .then(data => {
          // Retrieve the temperatures from the API response for the next 5 days
          const tempData = data.list.slice(0, 5).map(item => item.main.temp);
          setTemperatures(tempData);
        })
        .catch(error => {
          // Handle any errors
          console.error('API Error:', error);
        });
    } else {
      setTemperatures([]); // Reset temperatures to empty array if no city is entered
    }
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
      {temperatures.length > 0 ? (
        <div>
          <h3>5-Day Weather Forecast</h3>
          <ul>
            {temperatures.map((temp, index) => (
              <li key={index}>Day {index + 1}: {temp}°F</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No temperature data available</p>
      )}
    </div>
  );
}

export default WeatherComponent;
