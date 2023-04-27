import './App.css'
import { useState } from 'react'
import Weather from './components/Weather'
import Input from './components/Input'
import axios from 'axios'

function App() {
  const [city, setCity] = useState('')
  const [list, setList] = useState()
  const [result, setResult] = useState()
  const [main, setMain] = useState()
  const [weather, setWeather] = useState()
  const [wind, setWind] = useState()
  const apiKey = '5e6ae37d5af6e2a1fd438457d55671a8'
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    
    const fetchData = async(e) => {
      e.preventDefault()
      const res = await axios.get(url)
      setResult(res.data.city)
      setList(res.data.list)
      setMain(res.data.list[0].main)
      setWeather(res.data.list[0].weather[0])
      setWind(res.data.list[0].wind)
      setCity('')
    }
  
  return (
    <div className='app'>
      
      {result?
      <Weather
      setCity={setCity}
      city={city}
      fetchData={fetchData}
      state={result.name}
      country={result.country}
      temp={main.temp}
      desc1={weather.main}
      desc2={weather.description}
      pressure={main.pressure}
      humidity={main.humidity}
      wind={wind.speed}
      list={list}
      />:
      <Input 
      setCity={setCity}
      city={city}
      fetchData={fetchData}
      />}
    </div>
  )
}

export default App
