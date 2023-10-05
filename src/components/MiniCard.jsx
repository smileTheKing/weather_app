const MiniCard = ({props}) => {

    //console.log('mini',)
    return (
      <div className=" divide-slate-400/25  p-4 justify-center flex w-[140px] h-[140px] shadow-xl bg-white/80 backdrop-blur-lg  drop-shadow-2xl rounded-xl">
        {/**first part */}
        <div className="text-[0.75rem]  gap-4 flex flex-col text-slate-700 m-auto -ml-1">
          <h1 className="font-bold text-2xl text-slate-800">50 &deg;</h1>
  
          <div>
            <h3 className="font-semibold  items-center  flex">
              Sunny{" "}
              <img
                src={props}
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
  }

export default MiniCard;