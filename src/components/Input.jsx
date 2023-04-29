import React from 'react'

const Input = ({city, setCity, fetchData, errMessage}) => {
  
  return (
    <div className='w-[100%] h-[80%] flex flex-col justify-evenly items-center text-center'>

        <div className='flex flex-col justify-between items-center'>
          <p className='lg:text-5xl text-3xl mb-[3rem] font-[700] text-center'>Weather Forecast</p>
          <img className='lg:w-[10rem] w-[6rem]' src="/Media/perfect-day.svg" alt="" />
        </div>
      
        <form onSubmit={fetchData} className='w-[100%] text-black mb-[2rem] flex flex-col'>
                <input type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder='Input City'
                className='pageInput'
                />
                <p className='text-red-500 font-[500]'>{errMessage}</p>
        </form>
    </div>
  )
}

export default Input