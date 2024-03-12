import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import WeatherDetails from './WeatherDetails';
import axios from 'axios';

const WeatherMap = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const key = "5a59554ef6d44006200f6d8135292098";

    useEffect(() => {
        const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        map.on('click', async (e) => {
            const { lat, lng } = e.latlng; 
            console.log('Clicked at:', lat, lng);

            try {
                setLoading(true);
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`);
                const weatherData = response.data;
                console.log('Weather:', weatherData);
                setWeather(weatherData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching weather:', error);
                setLoading(false);
            }
        });

        return () => {
            map.remove();
        };
    }, []);

    return (
        <>
            <div id="map" style={{ height: '400px' }}></div>
            {weather && (
                <>
                    <h2>Weather Details for {weather.name}</h2>
                    {loading ? (
                        <p>Loading weather data...</p>
                    ) : (
                        <div>
                            <WeatherDetails data={weather} />
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default WeatherMap;
