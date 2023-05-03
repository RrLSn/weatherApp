import React from 'react'

const Nav = ({city,setCity,fetchData,errMessage}) => {
  return (
    <div className='w-[100%] flex justify-between lg:mb-[1rem] items-center lg:p-[] p-[0.5rem]'>
        <div className='lg:w-[15rem] w-[10rem] flex justify-between'>
          <p className='lg:text-2xl font-[700] text-center'>Weather Forecast</p>
          <img className='lg:w-[] w-[1.5rem]' src="/Media/Clear.svg" alt="" />
        </div>
        <form onSubmit={fetchData} className='text-black mb-[2rem]'>
                <input type="text"
                value={city}
                onChange={(e)=> setCity(e.target.value)}
                placeholder='Input City'
                className='weatherInput'
                />
                <p className='lg:w-[] w-[10rem] text-red-500 font-[500]'>{errMessage.slice(0,14)}</p>
        </form>
    </div>
  )
}

export default Nav