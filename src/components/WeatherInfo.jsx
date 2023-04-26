import React from 'react'

const WeatherInfo = (props) => {

  return (
    <div className='info-box'>
        <span>
            <p className='text-4xl font-[500]'>{props.state}, {props.country}</p>
            <img src=""/>
        </span>
        <p className='desc'>{props.desc1}</p>
        <p className='desc'>{props.desc2}</p>
        <p  className='desc text-6xl'>{props.temp}°C</p>

        <div className='h-[auto]'>
            <p className='text-2xl font-[700] my-[1rem]'>Weather Infomation</p>
            <div className='weatherInfo'>
             <div>
                <img src="/Media/humidity.png" />
                <p>{props.humidity}%</p>
                <h2>Humidity</h2>
             </div>
             <div>
                <img src="/Media/wind.png" />
                <p>{props.wind} <span>M/s</span></p>
                <h2>Wind</h2>
             </div>
             <div>
                <img src="/Media/temp.png" />
                <p>{props.temp}<span>°C</span></p>
                <h2>Temperature</h2>
             </div>
             <div>
                <img src="/Media/pressure.png" />
                <p>{props.pressure} <span>N/m²</span></p>
                <h2>Pressure</h2>
             </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherInfo