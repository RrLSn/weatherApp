import React from 'react'
import { Line } from 'react-chartjs-2';
// Add this at the top of your Graph.jsx or wherever you use Chart.js
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Graph = ({list}) => {
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

    const today = new Date().getDay();
    const labels = Array.from({ length: 7 }, (_, i) => days[(today + i) % 7]);
    const temps = list.slice(0, 7).map(item => item.main.temp);

    const data = {
        labels: labels,
        datasets: [{
            label: '7-Days Weather Statistic',
            data: temps,
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
        pointRadius: 8,
        tension: 0.5
        }],
        
    }
    const options  = {
        responsive: true,
        spanGaps: 10,
        maintainAspectRatio: false,
        plaugin: {
            legend: {display: false}
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
                    callback: (value) => value + '°F'
                }
            }
        }
    }

  return (
    <div className='w-full lg:h-[30vh] h-[45vh] flex justify-center'>
        <div className='md:w-[50%] w-[15rem] h-[100%] bg-[#b7b9c7] rounded-lg flex justify-center items-center p-4'>
        <Line data={data} options={options}></Line>
        </div>
    </div>
  )
}

export default Graph