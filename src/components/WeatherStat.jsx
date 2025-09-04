import React from 'react'
import DayStats from './DayStats'

const WeatherStat = ({ list }) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  const today = new Date()

  // Generate next 6 days info
  const days = Array.from({ length: 6 }, (_, i) => {
    const nextDay = new Date(today)
    nextDay.setDate(today.getDate() + i + 1)
    const dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    return {
      date: `${months[nextDay.getMonth()]} ${nextDay.getDate()}`,
      day: dayNames[nextDay.getDay()],
      temp: Math.round(list[i + 1].main.temp),
      desc1: list[i + 1].weather[0].main,
      desc2: list[i + 1].weather[0].description,
    }
  })

  return (
    <div className='w-full h-[max-content] flex flex-col justify-center items-center gap-4'>
      <p className='md:text-2xl text-[14px]'>NEXT-6DAYS FORECAST</p>
      <div className='statBoxes'>
        {days.map((d, idx) => (
          <DayStats
            key={idx}
            date={d.date}
            day={d.day}
            temp={d.temp}
            desc1={d.desc1}
            desc2={d.desc2}
          />
        ))}
      </div>
    </div>
  )
}

export default WeatherStat