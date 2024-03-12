import React from 'react';

function WeatherDetails({ data }) {
    return (
        <div>
            <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
            <p>Feels like: {Math.round(data.main.feels_like - 273.15)}°C</p>
            <p>Minimum temperature: {Math.round(data.main.temp_min - 273.15)}°C</p>
            <p>Maximum temperature: {Math.round(data.main.temp_max - 273.15)}°C</p>
            <p>Pressure: {data.main.pressure} hPa</p>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Wind speed: {data.wind.speed} m/s</p>
            <p>Wind direction: {data.wind.deg}°</p>
            <p>Cloudiness: {data.clouds.all}%</p>
            <p>Description: {data.weather[0].description}</p>
        </div>
    );
}

export default WeatherDetails;
