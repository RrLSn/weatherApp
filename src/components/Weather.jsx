import Nav from './Nav'
import WeatherInfo from './WeatherInfo'
import WeatherStat from './WeatherStat'
import Graph from './Graph'

const Weather = (props) => {
    const {
        city,
        setCity,
        fetchData,
        state,
        country,
        desc1,
        desc2,
        temp,
        humidity,
        wind,pressure,
        list,errMessage} = props

  return (
        <div className='w-full lg:h-full h-[max-content] lg:p-8 px-8 flex flex-col gap-4'>
            <Nav 
            city={city}
            setCity={setCity}
            fetchData={fetchData}
            errMessage={errMessage}
            />
            <div className='w-full lg:h-full h-[max-content] lg:flex xl:gap-10 py-4 '>
                <WeatherInfo 
                state={state}
                country={country}
                desc1={desc1}
                desc2={desc2}
                temp={Math.round(temp)}
                humidity={humidity}
                wind={wind}
                pressure={pressure}
                />
                <div className='lg:w-screen w-full h-[max-content] flex flex-col gap-10 lg:mt-0 mt-5'>
                    <WeatherStat 
                    list={list}
                    />
                    <Graph 
                    list={list}
                    />
                </div>
            </div>
        </div>
  )
}

export default Weather