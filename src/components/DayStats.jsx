import React from 'react'

const DayStats = (props) => {
    const {day,date,temp,desc1,desc2} = props
  return (
    <div className='statBox'>
        <p className='lg:text-2xl text-[16px'>{day}, {date}</p>
        <div className="lg:w-32 lg:h-32 md:w-20 md:h-20 w-8 h-8 flex justify-center items-center">
          <img className='w-full' src={`/Media/${desc1}.svg`} alt="Image" />
        </div>
        
        <h1 className='lg:text-2xl text-[16px] leading-[15px]'>{temp}°F</h1>
        <p className='lg:text-[18px] text-[12px] leading-[15px]'>{desc1}</p>
        <p className='lg:text-[18px] text-[12px] leading-[15px]'>{desc2}</p>
    </div>
  )
}

export default DayStats