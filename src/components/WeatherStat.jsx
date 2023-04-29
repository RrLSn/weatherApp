import React from 'react'
import DayStats from './DayStats'

const WeatherStat = (props) => {
    const {list} = props

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
        

    //   const DateArr = []
    //  today.setDate(new Date().getDate() + 1);
    //  let date1 = `${today}`.slice(4,10)
    //  console.log(date1)

    //  today.setDate(new Date().getDate() + 1);
    //  let date2 = `${today}`.slice(4,10)
    //  console.log(date2)

    //  today.setDate(new Date().getDate() + 1);
    //  let date3 = `${today}`.slice(4,10)
    //  console.log(date3)

    //  today.setDate(new Date().getDate() + 1);
    //  let date4 = `${today}`.slice(4,10)
    //  console.log(date4)

    //  today.setDate(new Date().getDate() + 1);
    //  let date5 = `${today}`.slice(4,10)
    //  console.log(date5)

    //  today.setDate(new Date().getDate() + 1);
    //  let date6 = `${today}`.slice(4,10)
    //  console.log(date6)

    
    // const date1 = today
    // const date2 = today
    // const date3 = today
    // const date4 = today
    // const date5 = today
    // const date6 = today

  return (
    <div>
        NEXT-6DAYS FORECAST
        <div className='statBoxes'>
            <DayStats 
            // date={date1}
            day={DaysOfWeekArr[1]} 
            temp={Math.round(list[1].main.temp)}
            desc1={list[1].weather[0].main}
            desc2={list[1].weather[0].description}
            />
            <DayStats
            // month={month} 
            // date={date2}
            day={DaysOfWeekArr[2]} 
            temp={Math.round(list[2].main.temp)}
            desc1={list[2].weather[0].main}
            desc2={list[2].weather[0].description}
            />
            <DayStats
            // month={month} 
            // date={date3}
            day={DaysOfWeekArr[3]} 
            temp={Math.round(list[3].main.temp)}
            desc1={list[3].weather[0].main}
            desc2={list[3].weather[0].description}
            />
            <DayStats 
            // month={month} 
            // date={date4}
            day={DaysOfWeekArr[4]}
            temp={Math.round(list[4].main.temp)}
            desc1={list[4].weather[0].main}
            desc2={list[4].weather[0].description}
            />
            <DayStats 
            // month={month} 
            // date={date5}
            day={DaysOfWeekArr[5]}
            temp={Math.round(list[5].main.temp)}
            desc1={list[5].weather[0].main}
            desc2={list[5].weather[0].description}
            />
            <DayStats 
            // month={month} 
            // date={date6}
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