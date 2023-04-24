import React from 'react'

const Nav = () => {
  return (
    <div className='w-[100%] flex justify-between'>
        <p className='text-2xl font-[700] text-center'>Weather Forecast</p>
        <form className='text-black mb-[2rem]'>
                <input type="text"
                value=""
                // onChange={(e)=> setCity(e.target.value)}
                placeholder='Input City'
                className='w-[20rem] p-[0.5rem] rounded-full focus:outline-black placeholder:p-[0.3rem]'
                />
        </form>
    </div>
  )
}

export default Nav