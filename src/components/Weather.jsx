import Graph from './Graph'
import Nav from './Nav'
import WeatherInfo from './WeatherInfo'
import WeatherStat from './WeatherStat'

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
        <div className='container'>
            <Nav 
            city={city}
            setCity={setCity}
            fetchData={fetchData}
            errMessage={errMessage}
            />
            <main>
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
                <div className='w-screen h-auto lg:bg-transparent bg-[#6464ab]'>
                    <WeatherStat 
                    list={list}
                    />
                    {/* <Graph /> */}
                </div>
            </main>
            
        </div>
  )
}

export default Weather