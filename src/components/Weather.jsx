import React, { useEffect, useState } from 'react'
import BackgroundSlider from './BackgroundSlider'
import axios from 'axios'

const Weather = () => {
    const [currentImg,setCurrentImg] = useState(5)
    const [data, setData] = useState({})
    // const [input, setInput] = useState('')
    const [location, setLocation] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8d65d181d0b30bf53beed92b8ebdad60`

    const searchLocation = (e) => {
        // e.preventDefault()
        if(e.key === 'Enter'){
            axios.get(url)
            .then((res) => setData(res.data))
            console.log(res.data)
        }
    }

    console.log(location)

    // const handleClick = (e) => {
    //     e.preventDefault()
    //     searchLocation()
    //     console.log(input)
    //     setInput('')
    // }

    const bgImgStyle = {
        backgroundImage: `url(${BackgroundSlider[currentImg].url})`,
        backgroundPosition: "absolute",
        backgroundSize: '100% 100%',
        height: '100%',
        width: '100%',
        top: "0",
        paddingTop: '40px',
        left: '0',
        zIndex: "-1" 
    }  
  return (
    // <div className='w-sreen h-screen bg-black'>
        <form style={bgImgStyle} className='container'>
            <input type="text" 
            value={location} 
            onChange={(e)=> setLocation(e.target.value)} 
            onKeyPress={searchLocation} placeholder='Enter Location' />
            <div className="top">
                <div className="location h-[15rem] flex flex-col justify-between">
                    <h1 className='text-7xl font-[700]'>Dallas</h1>
                    <p>Lon:</p>
                    <p>Lat:</p>
                    <div className="temp">
                        <h1 className='text-5xl font-[500]'>65°F</h1>
                    </div>
                </div>
                <div className="desc">
                    <p>clouds</p>
                </div>
            </div>
            <div className="bottom">
                <div className="feels">
                    <p>65°F</p>
                    <p>Feels Like</p>
                </div>
                <div className="humidity">
                    <p>20</p>
                    <p>Humidity</p>
                </div>
                <div className="wind">
                    <p>12mpm</p>
                    <p>Wind Speed</p>
                </div>
            </div>
        </form>
    // </div>
  )
}

export default Weather