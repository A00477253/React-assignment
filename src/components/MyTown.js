import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyTown() {
    const [weather, setWeather] = useState(null);
    const [isCelsius, setIsCelsius] = useState(true); 
    const city="Halifax";
    useEffect(() => {
        const lat = 44.651070
        const longt = -63.582687
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longt}&appid=12e3ead750d1c88cb8264b3378d12bf9`;

        axios.get(apiUrl)
            .then((response) => {
                setWeather(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const getTemperature = (isCelsius) => {
        if (weather) {
            const tempKelvin = weather.main.temp;
            if (isCelsius) {
                const tempCelsius = tempKelvin - 273.15;
                return tempCelsius.toFixed(2);
            }
            else {
                const tempFahrenheit = ((tempKelvin - 273.15) * 9 / 5) + 32;
                return tempFahrenheit.toFixed(2);
            }

        }
    }
    const temp = getTemperature(true);

    const getWeatherImage = (temp) => {
        if (weather) {
            if (temp <= 10) {
                return 'cold.png';
            } else if (temp > 10 && temp <= 20) {
                return 'mild.png';
            } else {
                return 'sunny.png';
            }
        }
    }
    const changeTemperatureUnit = () => {
        setIsCelsius((prevIsCelsius) => !prevIsCelsius);
    }
    return (

        <div >

            <h1>Weather Information</h1>

            {weather ? ( 
                <div>
                    <h1>I currently live in {city} which is located in beautiful atlantic coast of North america</h1>
                    {isCelsius ? (
                        <h1>Current weather of the city is {getTemperature(true) } °C <img
                            src={getWeatherImage(temp)}
                            alt="Weather Icon"
                            style={{ width: '50px', height: '50px', marginLeft: '10px' }}
                        /></h1>
                    ) : (
                        <h1>Current weather of the city is {getTemperature(false) } °F <img
                            src={getWeatherImage(temp)}
                            alt="Weather Icon"
                            style={{ width: '50px', height: '50px', marginLeft: '10px' }}
                        /></h1>
                    )}

                    <button onClick={changeTemperatureUnit}>
                        Change to {isCelsius ? '°F' : '°C'}
                    </button>
                    

                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
            <img
                            src='/halifax.jpg'
                            alt="Weather Icon"/>
        </div>
    );

}

export default MyTown;