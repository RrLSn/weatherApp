import './App.css'
import { useEffect, useState } from 'react'
import Weather from './components/Weather'
import Input from './components/Input'
import axios from 'axios'

function App() {
  const [city, setCity] = useState('')
  const [list, setList] = useState('')
  const [result, setResult] = useState('')
  const [main, setMain] = useState('')
  const [weather, setWeather] = useState('')
  const [wind, setWind] = useState('')
  const [errMessage, setErrMessage] = useState('')
  const apiKey = '5e6ae37d5af6e2a1fd438457d55671a8'
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`

    const fetchData = async(e) => {
        e.preventDefault()
       axios
       .get(url)
       .then((res) => {
        setResult(res.data.city)
        setList(res.data.list)
        setMain(res.data.list[0].main)
        setWeather(res.data.list[0].weather[0])
        setWind(res.data.list[0].wind)
        setCity('')
        setErrMessage('')
       })
        .catch((err) => {
          setErrMessage(`Request for ${city} failed, Check connection and Enter a Valid City`)
          setCity('')
        })
      }

      useEffect(()=>{fetchData()},[])
  
  return (
    <div>
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
      errMessage={errMessage}
      />:
      <Input 
      setCity={setCity}
      city={city}
      fetchData={fetchData}
      errMessage={errMessage}
      />}
    </div>
    </div>
  )
}

export default App
