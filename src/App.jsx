import './App.css'
import { useState } from 'react'
import Weather from './components/Weather'
import Input from './components/Input'
import axios from 'axios'

function App() {
  const [city, setCity] = useState('')
  const [data, setData] = useState('')
  const apiKey = '5e6ae37d5af6e2a1fd438457d55671a8'
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
    
    const fetchData = async(e) => {
      e.preventDefault()
      const res = await axios.get(url)
      setData(res.data)
      setCity('')
    }
  
  return (
    <div className='app'>
      
      {data?
      <Weather
      setCity={setCity}
      city={city}
      fetchData={fetchData}
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
