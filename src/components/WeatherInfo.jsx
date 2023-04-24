import React from 'react'

const WeatherInfo = () => {
  return (
    <div className='info-box'>
        <span>
            <p className='text-4xl font-[500]'>London,GB</p>
            <img src=""/>
        </span>
        <p className='desc'>rain</p>
        <p className='desc'>light raing</p>
        <p  className='desc text-6xl'>8 C</p>

        <div className='h-[30vh]'></div>
    </div>
  )
}

export default WeatherInfo