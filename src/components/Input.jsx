import React, { useState } from 'react'

const Input = () => {
    
    // const handleClick = (e) => {
    //     e.preventDefault()
    //     setCity('')
    //     searchCity()
    //     setTimeout(() => {
    //         setCurrentImg(Math.floor(Math.random() * 6))
    //     })
    // }
  
  return (
    <div className='w-[100%] h-[80%] flex justify-center items-center'>
      
        <form className='w-[100%] text-black mb-[2rem]'>
                <input type="text"
                value=""
                // onChange={(e)=> setCity(e.target.value)}
                placeholder='Input City'
                className='w-[25rem] p-[0.7rem] rounded-full focus:outline-black placeholder:p-[0.5rem]'
                />
        </form>
    </div>
  )
}

export default Input