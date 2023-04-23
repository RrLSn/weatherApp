import './App.css'
import Weather from './components/Weather'
// import Input from './components/Input'

function App() {
  
  return (
    <div className='app'>
      <p className='text-4xl font-[700]'>Weather Forcast</p>
      {/* <Input /> */}
      <Weather />
    </div>
  )
}

export default App
