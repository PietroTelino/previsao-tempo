import './WeatherToday.css'

function WeatherToday({ weather }) {
    const weatherPNG = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`
    const weatherTemperature = Math.round(weather.main.temp) + ' ºC'
    const weatherDescription = weather.weather[0].description
    const thermalSensation = Math.round(weather.main.feels_like) + ' ºC'
    const humidity = weather.main.humidity + ' %'
    const pressure = weather.main.pressure + ' hPa'

    return (
        <div className='weather-container'>
            <h2>{weather.name}</h2>

            <div className='weather-info'>
                <img src={weatherPNG} alt="Clima" />
                <p className='temperature'>{weatherTemperature}</p>
            </div>
            
            <p className='description'>{weatherDescription}</p>
            
            <div className='details'>
                <p>Sensação Térmica: {thermalSensation}</p>
                <p>Umidade: {humidity}</p>
                <p>Pressão: {pressure}</p>
            </div>
        </div>
    )
}

export default WeatherToday