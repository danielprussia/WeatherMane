import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import WeatherComponent from './components/WeatherComponent';

function App() {
  return (
    <div>
      <NavBar />
      <WeatherComponent />
    </div>
  );
}

export default App;
