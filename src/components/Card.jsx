import React from 'react'
import icon from '../assets/weather/64x64/day/113.png'

const Card = () => {
  return (
    <div className='divide-x divide-slate-400/25 p-4 justify-center flex w-[280px] h-[180px] bg-slate-50 drop-shadow-lg rounded-xl'>
    {/**first part */}
     <div className='text-[0.8rem] px-2 text-slate-700 m-auto -ml-1'>
     <h1 className='font-bold text-2xl text-slate-800'>32 &deg;</h1>
     <h3 className='font-semibold  items-center  flex'>Sunny <img src={icon} width={34} height={34} alt="icon" className=' inline-flex' /></h3>
     <h3 className=' font-semibold'>Monday 27, July '23</h3>
     </div>


       {/**second part */}
      <div className=' pl-2 font-bold text-[0.6rem] text-slate-500 flex flex-col justify-evenly'>
      <div>
        RealFeel: 37
      </div>
      <div>
       Humidity: 66%
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