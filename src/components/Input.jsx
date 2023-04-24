import React, { useState } from 'react'

const Input = () => {
  
  return (
    <div className='w-[100%] h-[80%] flex flex-col justify-evenly items-center text-center'>

        <p className='text-5xl font-[700] text-center'>Weather Forecast</p>
      
        <form className='w-[100%] text-black mb-[2rem]'>
                <input type="text"
                value=""
                placeholder='Input City'
                className='w-[25rem] p-[0.7rem] rounded-full focus:outline-black placeholder:p-[0.5rem]'
                />
        </form>
    </div>
  )
}

export default Input