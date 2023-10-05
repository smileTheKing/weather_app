import { createContext, useContext, useEffect ,useState} from "react";
import GET_API from "./weatherApi";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData,setWeatherData] = useState([])
  const [success,setSuccess] = useState(false)

  


  const getWeather = async (city) => {
    if(city)
    try {
      const result = await GET_API.get("data/2.5/find", { params: { q: city,type:'like'} });
     // console.log("home component", result);
      return result;
    } catch (err) {
      console.log(err);
    }
  };

  const getWeatherForcast = async (city) => {
    if(city)
    try {
      const result = await GET_API.get("geo/1.0/direct", { params: { q: city} });
      console.log("forcast", result);
      return result;
    } catch (err) {
      console.log(err);
    }
  };

  const currentWeather = async () => {
    //if(city)
    setSuccess(false);
    try {
      const result = await GET_API.get("data/2.5/weather", { params: { q: 'minnesota'} });
      console.log("current", result.data);
      if(result.data){
        setWeatherData(result.data)
        setSuccess(true);
      }else{
        return;
      }
     
      //return result;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {

    currentWeather()
    getWeather();
    getWeatherForcast('london')
  }, []);

const value ={getWeather,weatherData,setWeatherData, success}

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
