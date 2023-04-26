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
        wind,pressure} = props
    
  return (
        <div className='container'>
            <Nav 
            city={city}
            setCity={setCity}
            fetchData={fetchData}
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
                <div>
                    <WeatherStat />
                </div>
            </main>
            
        </div>
  )
}

export default Weather