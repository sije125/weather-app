import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return null;
  }

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{weather.city}, {weather.country}</h2>
      </div>
      
      <div className="weather-main">
        <div className="temperature">
          <span className="temp-value">{weather.temperature}°F</span>
          <img 
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.description}
            className="weather-icon"
          />
        </div>
        <p className="description">{weather.description}</p>
      </div>
      
      <div className="weather-details">
        <div className="detail-item">
          <span className="label">Feels like:</span>
          <span className="value">{weather.feelsLike}°F</span>
        </div>
        <div className="detail-item">
          <span className="label">Humidity:</span>
          <span className="value">{weather.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="label">Wind Speed:</span>
          <span className="value">{weather.windSpeed} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;