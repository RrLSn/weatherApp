import React from 'react'

const Nav = ({city,setCity,fetchData}) => {
  return (
    <div className='w-[100%] flex justify-between mb-[1rem] items-center'>
        <div className='w-[15rem] flex justify-between'>
          <p className='text-2xl font-[700] text-center'>Weather Forecast</p>
          <img src="/Media/Clear.svg" alt="" />
        </div>
        <form onSubmit={fetchData} className='text-black mb-[2rem]'>
                <input type="text"
                value={city}
                onChange={(e)=> setCity(e.target.value)}
                placeholder='Input City'
                className='weatherInput'
                />
        </form>
    </div>
  )
}

export default Nav