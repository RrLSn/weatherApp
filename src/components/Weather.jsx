import React, { useState } from 'react'
import BackgroundSlider from './BackgroundSlider'
import axios from 'axios'

const Weather = () => {
    const [currentImg,setCurrentImg] = useState(0)
    const [data, setData] = useState('')
    const [city, setCity] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=895284fb2d2c50a520ea537456963d9c`

    const searchCity = () => {
        axios.get(url)
        .then((res) => setData(res.data))
        .catch((err)=>{
            console.log(err)
        })
        console.log(data)
    }

    const handleClick = (e) => {
        e.preventDefault()
        setCity('')
        searchCity()
        setTimeout(() => {
            setCurrentImg(Math.floor(Math.random() * 6))
        })
    }

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
        <div style={bgImgStyle} className='container'>
            <form onSubmit={handleClick} className='w-[100%] flex justify-center text-black mb-[2rem]'>
                <input type="text"
                value={city}
                onChange={(e)=> setCity(e.target.value)}
                placeholder='Input City'
                className='w-[25rem] p-[0.7rem] rounded-full focus:outline-blue-700 placeholder:p-[0.5rem]'/>
            </form>
            {data.length === 0 ? (
                ""
            ): (
            <>
                <div className="top">
                    <div className="lg:h-[15rem] h-[12rem] flex flex-col justify-between">
                        <h1 className='lg:text-7xl text-3xl font-[700]'>{data.name}, <>{data.sys.country}</></h1>
                        <p>Lon: {data.coord.lon}</p>
                        <p>Lat: {data.coord.lat}</p>
                        <div className="temp">
                            <h1 className='text-5xl font-[500]'>{data.main.temp_max}°</h1>
                        </div>
                    </div>
                    <div className="desc">
                        <p>{data.weather[0].main}</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="feels">
                        <p>{data.main.feels_like}°</p>
                        <p>Feels Like</p>
                    </div>
                    <div className="humidity">
                        <p>{data.main.humidity}</p>
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        <p>{data.wind.speed}mpm</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </>
            )}
        </div>
  )
}

export default Weather