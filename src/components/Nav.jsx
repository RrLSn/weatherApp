import React from 'react'

const Nav = ({city,setCity,fetchData,errMessage}) => {
  return (
    <div className='w-[100%] h-16 flex justify-between items-center'>
        <span className='lg:w-[15rem] w-[10rem] flex justify-between'>
          <p className='lg:text-2xl font-[700] text-center'>Weather Forecast</p>
          <img className='w-[1.5rem]' src="/Media/Clear.svg" alt="" />
        </span>
        <form onSubmit={fetchData}>
                <input type="text"
                value={city}
                onChange={(e)=> setCity(e.target.value)}
                placeholder='Input City'
                className='weatherInput'
                />
                <p className='w-[10rem] text-red-500 font-[500]'>{errMessage.slice(0,14)}</p>
        </form>
    </div>
  )
}

export default Nav