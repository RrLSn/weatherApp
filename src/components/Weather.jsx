import React, { useState } from 'react'
import axios from 'axios'
import Nav from './Nav'
import WeatherInfo from './WeatherInfo'

const Weather = () => {
    const apiKey = '895284fb2d2c50a520ea537456963d9c'
    const [data, setData] = useState('')
    const [city, setCity] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    
  return (
        <div className='container'>
            <Nav />
            <main>
                <WeatherInfo />
            </main>
            
        </div>
  )
}

export default Weather