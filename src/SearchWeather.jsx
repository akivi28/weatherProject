import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import WeatherDetails from "./WeatherDetails";

const SearchWeather = () => {
    const { cityName } = useParams();
    const key = "5a59554ef6d44006200f6d8135292098";
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`);
                setWeather(response.data);
                setLoading(false);
                setNotFound(false);
            } catch (error) {
                console.error('Ошибка при получении данных о погоде:', error);
                setLoading(false);
                setNotFound(true);
            }
        };

        fetchData();
    }, [cityName, key]);

    return (
        <>
            <h2>Weather Details for {cityName}</h2>
            {loading ? (
                <p>Loading...</p>
            ) : notFound ? (
                <p>No weather data found for {cityName}</p>
            ) : (
                <div>
                    {weather && <WeatherDetails data={weather} />}
                </div>
            )}
        </>
    );
};

export default SearchWeather;
