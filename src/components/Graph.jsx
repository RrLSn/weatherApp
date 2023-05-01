import React from 'react'
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {
    Colors,
    LineController,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Legend
  } from 'chart.js'
  
  Chart.register(
    Colors,
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend
  );

const Graph = (props) => {
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

    const labels = [
        DaysOfWeekArr[0],
        DaysOfWeekArr[1],
        DaysOfWeekArr[2],
        DaysOfWeekArr[3],
        DaysOfWeekArr[4],
        DaysOfWeekArr[5],
        DaysOfWeekArr[6],
        DaysOfWeekArr[7]
    ]

    const data = {
        labels: labels,
        datasets: [{
            label: '7-Days Weather Statistic',
            data: 
            [
                list[0].main.temp,
                list[1].main.temp,
                list[2].main.temp,
                list[3].main.temp,
                list[4].main.temp,
                list[5].main.temp,
                list[6].main.temp
            ],
            fill: {
                target: 'origin',
                above: '#9498b6',
                below: 'black'
            },
        backgroundColor: 'transparent',
        borderColor: '#8d92bd',
        pointBorderColor: '#383c61',
        pointBackgroundColor: 'transparent',
        pointBorderWidth: 1,
        pointStyle: 'rectRounded',
        pointRadius: '8',
        tension: 0.5
        }],
        
    }
    const options  = {
        responsive: true,
        spanGaps: 10,
        maintainAspectRatio: false,
        plaugin: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: true,
                    tickWidth: 1
                }
            }, 
            y: {
                ticks: {
                    callback: (value) => value + '°C'
                }
            }
        }
    }

  return (
    <div className='lg:w-[100%] w-[100%] lg:h-[30vh] h-[45vh] lg:mt-[-4rem] flex justify-center lg:py-[0] py-[1rem]'>
        <div className='lg:w-[35rem] w-[25rem] h-[100%] bg-[#b7b9c7] rounded-lg flex justify-center px-[1rem]'>
        <Line data={data} options={options}></Line>
        </div>
    </div>
  )
}

export default Graph