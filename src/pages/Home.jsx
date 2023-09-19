import React from "react";
import { CardComponent } from "../components";
import bridge from "../assets/bridge.webp";
import tower from "../assets/tower.jpeg";
import icon from "../assets/weather/64x64/day/116.png";
import { MapPin } from "lucide-react";

const LeftSide = (props) => {
  return (
    <div className=" flex  w-full  bg-green-200 rounded-r-[20px] overflow-hidden relative items-center justify-center">
      <img
        src={tower}
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
      <h1 className=" absolute z-40 font-bold text-[12rem] ] text-slate-50 drop-shadow-lg">
        11:11
      </h1>
    </div>
  );
};

const MiniCard = (props) => {
  return (
    <div className=" divide-slate-400/25 p-4 justify-center flex w-[140px] h-[140px] shadow-xl bg-slate-50 drop-shadow-2xl rounded-xl">
      {/**first part */}
      <div className="text-[0.75rem]  gap-4 flex flex-col text-slate-700 m-auto -ml-1">
        <h1 className="font-bold text-2xl text-slate-800">50 &deg;</h1>

        <div>
          <h3 className="font-semibold  items-center  flex">
            Sunny{" "}
            <img
              src={icon}
              width={34}
              height={34}
              alt="icon"
              className=" inline-flex"
            />
          </h3>
          <h3 className=" font-semibold">Tue 28, July '23</h3>
        </div>
      </div>
    </div>
  );
};

const RightSide = (props) => {
  return (
    <div className="  w-1/2 h-full p-6 flex flex-col justify-between">
      <h1 className=" font-bold text-3xl text-slate-800">Today</h1>
      <CardComponent />

      <h1 className=" font-bold text-1xl text-slate-800">Daily</h1>

      <div className="flex gap-2">
        <MiniCard />
        <MiniCard />
      </div>
    </div>
  );
};

const HomeComponent = () => {
  return (
    <main className=" h-[490px]  shadow-2xl rounded-xl  shadow-slate-900/90 w-2/3 mt-4 justify-center flex flex-row items-center container ">
      <div className="flex w-full h-full bg-slate-50  rounded-xl overflow-hidden">
        <LeftSide />
        <RightSide />
      </div>
    </main>
  );
};

export default HomeComponent;
