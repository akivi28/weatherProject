import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherDetails from './WeatherDetails';

function MainPage() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const key = "5a59554ef6d44006200f6d8135292098";
                    try {
                        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`);
                        setWeather(response.data);
                        setLoading(false);
                    } catch (error) {
                        console.error('Ошибка при получении данных о погоде:', error);
                        setLoading(false);
                    }
                }, (error) => {
                    console.error('Ошибка при определении геолокации:', error);
                    setLoading(false);
                });
            } else {
                console.error('Геолокация не поддерживается вашим браузером');
                setLoading(false);
            }
        }

        getLocation();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                        <h2>Weather in your location:</h2>
                    {weather && <WeatherDetails data={weather} />}
                </div>
            )}
        </div>
    );
}

export default MainPage;
