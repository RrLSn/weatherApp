import React from 'react'

const WeatherInfo = ({state,country,desc1,desc2,humidity,wind,temp,pressure}) => {
   

  return (
    <div className='info-box'>
        Today
        
         <p className='text-4xl font-[500]'>{state}, {country}</p>
         <img className='lg:w-[6rem] w-[5rem] m-auto' src={`/Media/${desc1}.svg`}/>
        <div className='h-[10.5rem] flex flex-col justify-between'>
        <p className='desc'>{desc1}</p>
        <p className='desc'>{desc2}</p>
        <p  className='desc lg:text-6xl text-4xl'>{temp}°F</p>
        </div>

        <div className='h-[auto] w-full flex flex-col items-center gap-3'>
            <p className='lg:text-2xl font-[700]'>Weather Infomation</p>
            <div className='weatherInfo'>
             <div>
                <img src="/Media/humidity.png" />
                <p>{humidity}%</p>
                <h2>Humidity</h2>
             </div>
             <div>
                <img src="/Media/wind.png" />
                <p>{wind}M/s</p>
                <h2>Wind</h2>
             </div>
             <div>
                <img src="/Media/temp.png" />
                <p>{temp}°F</p>
                <h2>Temperature</h2>
             </div>
             <div>
                <img src="/Media/pressure.png" />
                <p>{pressure} N/m²</p>
                <h2>Pressure</h2>
             </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherInfo