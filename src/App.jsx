import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherToday from './components/WeatherToday/WeatherToday'
import WeatherWeek from './components/WeatherWeek/WeatherWeek'

function App() {
  const [weatherToday, setWeatherToday] = useState()
  const [weatherWeek, setWeatherWeek] = useState()
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const api_key = 'ef9ad336e2099ab8bec3984e8e96f3a5'
    const urlToday = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&lang=pt_br&units=metric`
    const urlWeek = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&lang=pt_br&units=metric`

    const apiInfoToday = await axios.get(urlToday)
    setWeatherToday(apiInfoToday.data)
    const apiInfoWeek = await axios.get(urlWeek)
    setWeatherWeek(apiInfoWeek.data)
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>
      {weatherToday && <WeatherToday weather={weatherToday}/>}
      {weatherWeek && <WeatherWeek weatherWeek={weatherWeek}/>}
    </div>
  )
}

export default App