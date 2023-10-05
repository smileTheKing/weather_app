import { MoonIcon, Search, SunIcon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useWeatherContext } from '../utils/weatherContext';

const listOfCity = [
  "London, UK",
  "Monrovia, Lib",
  "Miami, Fl",
  "New York, NY",
  "Tokyo, Japan",
]




const AutoComplete = ({props,onSelect})=>{
  //console.log('auto',props[0])
  
  return(<div  className=' z-50 w-full max-h-[250px]  absolute flex flex-col justify-center items-center top-16 font-semibold font-orbitron text-slate-700 mt-2  overflow-hidden'>
  <div className=' ml-24 bg-slate-50 w-[450px] min-h-[250px] drop-shadow-lg  top-16 rounded-lg justify-center flex items-center overflow-auto'> 
 {props.length ?<ul className=' block self-stretch w-full'>
    {props.map((city,idx)=>(
     <li onClick={()=>onSelect(city)} className={`w-full hover:bg-transparent duration-300 p-4 bg-slate-${idx %2 ? 300:200}`} key={idx}>{city?.name}, {city?.sys?.country}</li>
  ))}
    </ul>:<p className=' p-4'>no city found</p>}
  
   </div>
 </div>)
}

const Navbar = () => {

const [search,setSearch] = useState('')
const [filterSuggestion,setFilterSuggestion] = useState([])
const searchContainerRef = useRef(null);
const seletedCityRef = useRef(null);
const {getWeather,setWeatherData,} = useWeatherContext()

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []); 


const handleSubmit = () => {
  
  setSearch('')
  setWeatherData(seletedCityRef.current)
  //console.log('current data',weather)
}

const handleSearch = async (event) =>{
  //get the input field value
   const query = event.target.value;

   //set the search state
    setSearch(query);

    //filter //listOfCity.filter((c)=> c.toLowerCase().includes(query.toLowerCase()))
    const filterCity =  await getWeather(query);
   
    //setting the filter state 
    setFilterSuggestion(filterCity.data.list)
}


const handleSuggestion = (event) =>{
  //console.log('select',event)
  setSearch(event?.name)
  seletedCityRef.current = event
  setFilterSuggestion([])
}
 const handleDocumentClick = (event) => {
     if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
      setFilterSuggestion([])
     }
   // console.log(event)
  };


  return (
    <nav ref={searchContainerRef} className=' bg-gray-400/20 w-full flex-col relative flex items-center  justify-center shadow-lg rounded-2xl'>
        <div className='flex items-center w-full p-2 justify-between relative'>
         <div className=" text-slate-800/60 font-orbitron font-bold text-2xl"><span>Weathery</span> </div>

         <div className=" font-bold text-1xl font-orbitron flex items-center justify-start space-x-2 border-2 bg-transparent border-white drop-shadow px-4  py-2 rounded-2xl">
            <input onChange={handleSearch} value={search} placeholder='search city' className='border-none bg-transparent text-center w-full h-full px-4 outline-none text-slate-50 placeholder-slate-50/30'/>
            <button onClick={(handleSubmit)}> <Search className=' text-slate-300 hover:scale-105 '/></button> 
         </div>
       
        {filterSuggestion.length >=1 && search && 
         <AutoComplete  props={filterSuggestion} onSelect={handleSuggestion}/>
        }

         <div className=" font-bold text-yellow-500 "> <SunIcon size={34}/> </div>
        </div>

       
    </nav>
  )
}

export default Navbar;