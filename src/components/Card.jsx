import React from 'react'
//import icon from '../assets/weather/64x64/day/113.png'
import { useWeatherContext } from '../utils/weatherContext'

const Card = () => {
  const {weatherData,success} = useWeatherContext()
 //const {} []
  console.log('card',success)
  console.log('card',weatherData)

  
  return (
    <div className='divide-x divide-slate-400/25 p-2 justify-center flex w-[350px] h-[160px] bg-slate-50 drop-shadow-lg rounded-xl'>
    {/**first part */}
     <div className='text-[0.67rem] space-y-[4px] pl-2 text-slate-700 m-auto -ml-1 w-full'>
     <h1 className='font-bold text-[1.5rem] text-slate-800'>32 &deg;</h1>
     {<h3 className=' items-center  flex text-[1.2rem] font-thin'>{success && weatherData.weather[0].main} 
     <img src={`https://openweathermap.org/img/wn/${success && weatherData.weather[0].icon}@4x.png`}
      width={54} height={34} alt="icon" className=' inline-flex drop-shadow' /></h3>}
     <h3 className='font-thin'>Monday 27, July '23</h3>
     </div>


       {/**second part */}
      <div className=' pl-2 font-bold text-[0.6rem] text-slate-500 flex flex-col justify-evenly w-full mx-auto' >
      <div>
        RealFeel: 37
      </div>
      <div>
       Humidity: {weatherData?.main?.humidity}
      </div>
      <div>
       Cloud Cover: 45%
      </div>
      <div>
       Visibility: 5km
      </div>
      <div>
       UV Index: 0 Low
      </div>
      </div>
    </div>
  )
}

export default Card;