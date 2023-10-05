import React from "react";
import Chart from "./Chart";
import { LucideCloudRainWind, SunriseIcon, Sunset, Wind } from "lucide-react";
import AnimateReveal from "./AnimateReveal";
//import GET_API from "../utils/weatherApi";

const SquareBox = ({ icon, label, temp, time }) => {
  return (
    <div className="flex bg-gradient-to-l from-white to-slate-400/70 w-[280px] h-[150px] rounded-lg drop-shadow items-center justify-center gap-2 ">
      {icon || <LucideCloudRainWind size={80} color="#fff" />}
      <div className=" flex flex-col text-slate-800">
        <span className=" font-[300] text-2xl">{label}</span>
        <span className="font-bold text-2xl">{temp || time}</span>
      </div>
    </div>
  );
};

const Forecast = () => {



  return (
    <section className="w-screen h-screen   container items-center flex flex-col justify-center gap-12">
      <h1 className=" text-3xl text-white/90 mt-3  drop-shadow-lg shadow-slate-200 font-extrabold font-orbitron">
        Forcast
      </h1>

      <div className=" w-full max-h-full flex gap-4 ">
        {/**forcasting area */}
        <div className=" flex flex-col justify-between gap-4 p-4 ">
          <div className=" grid grid-cols-2 gap-y-2 gap-x-4  w-full h-full  items-center justify-center">
            <SquareBox label={"Humidity"} temp={"30%"} />
            <SquareBox
              label={"Sunset"}
              time={"6:30 pm"}
              icon={<Sunset size={80} color="#fff" />}
            />
            <SquareBox
              label={"Wind"}
              temp={"18 km/h"}
              icon={<Wind size={80} color="#fff" />}
            />
            <SquareBox
              label={"Sunrise"}
              temp={"48%"}
              icon={<SunriseIcon size={80} color="#fff" />}
            />
          </div>
          <div className=" w-full h-[120px] flex  justify-between p-8 text-slate-800  rounded-2xl shadow-xl bg-gradient-to-r from-white to-slate-400/70 ">
            <div>
              <p className="font-semibold text-xl">Monthly Rainfall</p>
              <p className="font-semibold text-xl">55mm</p>
            </div>

            <div>
              <p className="font-semibold text-xl">This Year</p>
              <p className="font-semibold text-xl">18%</p>
            </div>
          </div>
        </div>

        {/**chart area */}
        <div className=" flex flex-col p-4  max-w-full ">
          <Chart />
        </div>
      </div>
    </section>
  );
};

export default Forecast;
