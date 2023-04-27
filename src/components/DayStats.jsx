import React from 'react'

const DayStats = (props) => {
    const {day,temp,desc1,desc2} = props
  return (
    <div className='statBox'>
        <p>{day}</p>
        <img src="" alt="" />
        <h1>{temp}°C</h1>
        <p>{desc1}</p>
        <p>{desc2}</p>
    </div>
  )
}

export default DayStats