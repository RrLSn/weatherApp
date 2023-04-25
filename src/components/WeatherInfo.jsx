import React from 'react'

const WeatherInfo = () => {
  return (
    <div className='info-box'>
        <span>
            <p className='text-4xl font-[500]'>London,GB</p>
            <img src=""/>
        </span>
        <p className='desc'>rain</p>
        <p className='desc'>light rain</p>
        <p  className='desc text-6xl'>8 C</p>

        <div className='h-[30vh]'>
            <p className='text-2xl font-[700] my-[1rem]'>Weather Infomation</p>
            <div className='weatherInfo'>
             <div>
                <img src="/Media/humidity.png" />
                <p>10</p>
                <h2>Humidity</h2>
             </div>
             <div>
                <img src="/Media/wind.png" />
                <p>10 <span>M/s</span></p>
                <h2>Wind</h2>
             </div>
             <div>
                <img src="/Media/temp.png" />
                <p>10 <span>°C</span></p>
                <h2>Temperature</h2>
             </div>
             <div>
                <img src="/Media/pressure.png" />
                <p>10 <span>N/m²</span></p>
                <h2>Pressure</h2>
             </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherInfo