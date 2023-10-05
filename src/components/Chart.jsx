import { Cloud, CloudRain, Sun, SunDim, SunSnow } from "lucide-react";
import React from "react";
import ReactApexChart from 'react-apexcharts';




const WeekDay =({day,temp,icon})=>{
    return(
     <div className="flex flex-col items-center gap-2 p-2 justify-center font-bold text-[0.6rem] ">
        <span>{day}</span>
        {icon}
        <span>{temp}</span>
    </div>
    )
}



const Chart = (props) => {


    
  // ApexCharts options and config
  const series = [
    {
      name: 'Temperature',
      data: [12, 10, 13, 15, 17, 19, 14]
    }
  ];

  const options = {
    chart: {
        id: 'line-chart',
        type: 'area',
        zoom:{
            enabled:false,
        },
        toolbar: {
            show: false // Hide the toolbar (including download button)
          }
       
      },
    xaxis: {
      categories: ['01am','05am','01pm','03pm','04pm','08pm','11pm'],
      tickPlacement: 'between',
    },
    colors: [ '#a3b0c2'],
    grid: {
        show: false, // Hide the grid lines
      },
      yaxis: {
        show: false, // Hide the y-axis horizontal line and labels
       // tickPlacement: 'on',
      },
      dataLabels: {
        enabled: true,
    }
  };

  return (
   <div className="w-full font-bold text-sm text-slate-600 bg-white/70 rounded-lg flex h-full items-center  shadow-md  flex-col justify-between">
   <h3 className=" font-orbitron text-2xl mt-8">Tempareture. Wind. Precipitation</h3>
   <ReactApexChart  options={options} series={series} type="area" height={300} width={600}/>
   <div className="flex w-full flex-row  justify-evenly h-full pb-4">
   <WeekDay day={'Mon'}  temp={12} icon={ <Sun/>}/>
   <WeekDay day={'Tue'}  temp={10} icon={ <Cloud/>}/>
   <WeekDay day={'Wed'}  temp={13} icon={ <SunDim/>}/>     
   <WeekDay day={'Thur'} temp={15} icon={ <CloudRain/>}/>
   <WeekDay day={'Fri'}  temp={17} icon={ <Sun/>}/>
   <WeekDay day={'Sat'}  temp={19} icon={ <Sun/>}/>
   <WeekDay day={'Sun'}  temp={14} icon={ <SunSnow/>}/>
    </div>
   </div>
  );
};

export default Chart;
