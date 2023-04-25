import Nav from './Nav'
import WeatherInfo from './WeatherInfo'

const Weather = ({city,setCity,fetchData}) => {
    
  return (
        <div className='container'>
            <Nav 
            city={city}
            setCity={setCity}
            fetchData={fetchData}
            />
            <main>
                <WeatherInfo />
            </main>
            
        </div>
  )
}

export default Weather