import React, { useEffect, useState } from 'react'
import BackgroundSlider from './BackgroundSlider'

const Weather = () => {
    const [currentImg,setCurrentImg] = useState(3)
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=8d65d181d0b30bf53beed92b8ebdad60`

    // useEffect((
    //     setInterval(() => {
    //         if(BackgroundSlider){}
    //     },4000)
    // ),)

    // setCurrentImg(useEffect(() => {
    //     BackgroundSlider.map(img => console.log(img.url))
    // }))

    const bgImgStyle = {
        // backgroundImage: `url(${BackgroundSlider[currentImg].url})`,
        // backgrounColor: red,
        backgroundPosition: "absolute",
        backgroundSize: '100% 100%',
        height: '100vh',
        width: '100%',
        top: "0",
        paddingTop: '40px',
        left: '0',
        zIndex: "-1" 
    }  
  return (
    // <div className='w-sreen h-screen bg-black'>
        <div style={bgImgStyle} className='container'>
            {/* <div className="top">
                <div className="location h-[12rem] flex flex-col justify-between">
                    <h1 className='text-7xl font-[700]'>Dallas</h1>
                    <p>Lon:</p>
                    <p>Lat:</p>
                    <div className="temp">
                        <h1 className='text-5xl font-[500]'>65°F</h1>
                    </div>
                    <div className="desc">
                        <p>clouds</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="feels">
                    <p>65°F</p>
                </div>
                <div className="humidity">
                    <p>20</p>
                </div>
                <div className="wind">
                    <p>12mpm</p>
                </div>
            </div> */}
        </div>
    // </div>
  )
}

export default Weather