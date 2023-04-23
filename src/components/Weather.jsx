import React, { useState } from 'react'
import axios from 'axios'

const Weather = () => {
    const apiKey = '895284fb2d2c50a520ea537456963d9c'
    const [data, setData] = useState('')
    const [city, setCity] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const searchCity = () => {
        axios.get(url)
        .then((res) => setData(res.data))
        .catch((err)=>{
            console.log(err)
        })
        console.log(data)
    }

    
  return (
        <div className='container'>
            
            
        </div>
  )
}

export default Weather