import React from 'react'

const DayStats = (props) => {
    const {day,date,temp,desc1,desc2} = props
  return (
    <div className='statBox'>
        <p>{day}, {date}</p>
        <img className='lg:m-auto' src={`/Media/${desc1}.svg`} alt="" />
        <h1>{temp}°F</h1>
        <p>{desc1}</p>
        <p>{desc2}</p>
    </div>
  )
}

export default DayStats