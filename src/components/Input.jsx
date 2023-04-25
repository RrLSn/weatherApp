import React, { useState } from 'react'

const Input = ({city, setCity, fetchData}) => {
  
  return (
    <div className='w-[100%] h-[80%] flex flex-col justify-evenly items-center text-center'>

        <p className='text-5xl font-[700] text-center'>Weather Forecast</p>
      
        <form onSubmit={fetchData} className='w-[100%] text-black mb-[2rem]'>
                <input type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder='Input City'
                className='pageInput'
                />
        </form>
    </div>
  )
}

export default Input