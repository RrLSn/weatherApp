import React from 'react'

const Input = ({city, setCity, fetchData, errMessage}) => {
  
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center lg:gap-14 gap-10 items-center text-center bg-[#33338d]/40'>

        <div className='flex flex-col gap-5 lg:gap-10 items-center'>
          <p className='lg:text-5xl text-2xl font-[700] text-center'>Weather Forecast</p>
          <img className='lg:w-[10rem] w-[5rem]' src="/Media/perfect-day.svg" alt="" />
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