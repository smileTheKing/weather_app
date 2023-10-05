import React, { useEffect } from "react";
import { CardComponent } from "../components";
import bridge from "../assets/bridge.webp";
import tower from "../assets/tower.jpeg";
import icon from "../assets/weather/64x64/day/116.png";
import { MapPin } from "lucide-react";
import MiniCard from "../components/MiniCard";
import Forecast from "../components/Forecast";
import AnimateReveal from "../components/AnimateReveal";
import GET_API from "../utils/weatherApi";
import { useWeatherContext } from "../utils/weatherContext";

const LeftSide = (props) => {
  //console.log('leftSide',props)
  return (
    <div className=" flex  w-full  bg-green-200 rounded-r-[20px] overflow-hidden relative items-center justify-center">
      <img
        src={bridge}
        alt="img"
        className=" object-cover w-full h-full overflow-hidden relative "
      />
      <div className=" z-40 absolute flex items-center top-0 px-12 pt-6 w-full text-slate-50 font-bold">
        <h1 className=" drop-shadow-lg">forecast</h1>
        <div className=" ml-auto p-2 flex items-center justify-center space-x-2 w-[150px] h-[50px] bg-gray-500/80 rounded-lg  backdrop-blur-sm drop-shadow-md">
          <MapPin size={20} />
          <div className=" text-[12px]">
            <p className=" font-semibold">current location</p>
            <p>paris</p>
          </div>
        </div>
      </div>
      <h1 className=" font-orbitron font-bold absolute z-40 text-[5rem] text-slate-50 drop-shadow-lg">
        12:50PM
      </h1>
    </div>
  );
};

const RightSide = (props) => {
  //console.log('rightSide',props)
  return (
    <div className="  w-1/2 h-full font-orbitron   p-6 flex flex-col justify-between">
      <h1 className=" font-bold text-3xl text-slate-800">Today</h1>
      <CardComponent props={props}/>
      <h1 className=" font-bold text-1xl text-slate-800">Daily</h1>
      <div className="flex gap-2">
        <MiniCard props={icon} />
        <MiniCard props={icon} />
      </div>
    </div>
  );
};
//
const Hero = ({props}) => {
  //console.log(props)

  return (
    <section className="w-full h-screen  flex flex-col gap-8  items-center justify-center container ">
      <div className="w-2/3 h-[490px] shadow-2xl rounded-xl  shadow-slate-900/90  justify-center flex flex-col items-center ">
        <div className="flex w-full h-full bg-white/70 backdrop-blur-lg rounded-xl overflow-hidden">
          <LeftSide props={props}/>
          <RightSide  props={props}/>
        </div>
      </div>
    </section>
  );
};

const HomeComponent = () => {
  const {weather} = useWeatherContext()
  return (
    <div className="flex flex-col mx-auto gap-2 items-center  backdrop-blur-lg min-h-screen px-4 py-3">
      <Hero props={weather}/>
      <Forecast />
    </div>
  );
};

export default HomeComponent;
