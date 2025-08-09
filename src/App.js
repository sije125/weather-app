import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { getWeatherByCity, getWeatherByCoords } from './services/weatherApi';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (city, lat, lon) => {
    setLoading(true);
    setError('');
    
    try {
      let weatherData;
      if (city) {
        weatherData = await getWeatherByCity(city);
      } else if (lat && lon) {
        weatherData = await getWeatherByCoords(lat, lon);
      }
      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="app-title">Weather App</h1>
        <SearchBar onSearch={handleSearch} loading={loading} />
        
        {error && <div className="error-message">{error}</div>}
        
        {loading && <div className="loading">Loading weather data...</div>}
        
        <WeatherCard weather={weather} />
      </div>
    </div>
  );
}

export default App;
