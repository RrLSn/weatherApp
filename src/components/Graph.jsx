import React from 'react'
import {
    Chart,
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

const Graph = () => {
  return (
    <div>Graph</div>
  )
}

export default Graph