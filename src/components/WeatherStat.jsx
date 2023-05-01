import React from 'react'
import DayStats from './DayStats'

const WeatherStat = (props) => {
    const {list} = props

    const Months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec'
    ]

    let today = new Date();
    let DaysOfWeekArr = []

    for (let i = 0; i < 7; i++) {
    let nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    let dayOfWeek = nextDay.getDay();
    
    switch (dayOfWeek) {
        case 0:
        DaysOfWeekArr.push("Sun");
        break;
        case 1:
        DaysOfWeekArr.push("Mon");
        break;
        case 2:
        DaysOfWeekArr.push("Tues");
        break;
        case 3:
        DaysOfWeekArr.push("Wed");
        break;
        case 4:
        DaysOfWeekArr.push("Thurs");
        break;
        case 5:
        DaysOfWeekArr.push("Fri");
        break;
        case 6:
        DaysOfWeekArr.push("Sat");
        break;
    }}
        
    const month = Months[today.getMonth()]
    console.log(month)
    
    const date1 = `${month} ${today.getDate()+1}`
    const date2 = `${month} ${today.getDate()+2}`
    const date3 = `${month} ${today.getDate()+3}`
    const date4 = `${month} ${today.getDate()+4}`
    const date5 = `${month} ${today.getDate()+5}`
    const date6 = `${month} ${today.getDate()+6}`

  return (
    <div className='lg:p-[] p-[1rem]'>
        NEXT-6DAYS FORECAST
        <div className='statBoxes'>
            <DayStats 
            date={date1}
            day={DaysOfWeekArr[1]} 
            temp={Math.round(list[1].main.temp)}
            desc1={list[1].weather[0].main}
            desc2={list[1].weather[0].description}
            />
            <DayStats
            date={date2}
            day={DaysOfWeekArr[2]} 
            temp={Math.round(list[2].main.temp)}
            desc1={list[2].weather[0].main}
            desc2={list[2].weather[0].description}
            />
            <DayStats
            date={date3}
            day={DaysOfWeekArr[3]} 
            temp={Math.round(list[3].main.temp)}
            desc1={list[3].weather[0].main}
            desc2={list[3].weather[0].description}
            />
            <DayStats 
            date={date4}
            day={DaysOfWeekArr[4]}
            temp={Math.round(list[4].main.temp)}
            desc1={list[4].weather[0].main}
            desc2={list[4].weather[0].description}
            />
            <DayStats 
            date={date5}
            day={DaysOfWeekArr[5]}
            temp={Math.round(list[5].main.temp)}
            desc1={list[5].weather[0].main}
            desc2={list[5].weather[0].description}
            />
            <DayStats 
            date={date6}
            day={DaysOfWeekArr[6]}
            temp={Math.round(list[6].main.temp)}
            desc1={list[6].weather[0].main}
            desc2={list[6].weather[0].description}
            />
        </div>
    </div>
  )
}

export default WeatherStat