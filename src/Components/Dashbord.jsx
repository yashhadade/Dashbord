import React, { useState, useEffect } from 'react';
import ChartsOverviewDemo from './ChartsOverViewDemo';

const Dashbord = () => {
 
  const [leads, setLeads] = useState(0);
  const [rms, setRms] = useState(0);
  const [deals, setDeals] = useState(0);
  const [sales, setSales] = useState(0);

 
  const animateNumber = (target, setValue) => {
    let currentValue = 0;
    const increment = target / 100;  
    const animate = () => {
      currentValue += increment;
      if (currentValue >= target) {
        setValue(target); 
      } else {
        setValue(Math.floor(currentValue)); 
        requestAnimationFrame(animate); 
      }
    };
    animate();
  };

  
  useEffect(() => {
    animateNumber(150000, setSales);  
    animateNumber(101, setLeads);     
    animateNumber(55, setDeals);      
    animateNumber(520, setRms);         
  }, []);

  return (
    <div className="flex-col">
      <div className="m-7 max-320:m-2">
        <h1 className="text-5xl font-bold mb-3 text-emerald-400 max-320:text-3xl max-600:text-4xl ">Dashboard</h1>
        <p className="text-lg underline">Hi, Admin</p>
      </div>
      <div className="flex flex-wrap justify-start items-center bg-gray-100 p-4  rounded-lg shadow-md overflow-hidden">
        <div className="flex max-736:flex-col justify-between w-[50%] mr-0">
        <div className="text-center bg-fuchsia-900 text-white h-24 rounded-lg p-2 pr-4 pl-4 mr-9 w-[50%] max-600:w-[99%] max-736:w-[99%] lg:w-[50%] xl:w-[50%] max-736:mb-4 max-736:mr-4 max-736:mt-4  max-320:mr-1 max-320:h-16 ">
            <h1 className="text-5xl font-bold mb-3  max-320:mb-0 max-360:mb-1 max-600:text-4xl">{leads}</h1>
            <p className=' max-320:text-xs max-600:text-sm '>Total Leads Registered</p>
          </div>
          <div className="text-center bg-amber-500 text-white h-24 rounded-lg p-2 pr-14 pl-14 w-[50%] max-600:w-[99%] max-736:w-[99%] max-736:w[100%] mr-9  max-736:mr-4 max-736:mb-4  max-320:mr-1 max-320:h-16 ">
            <h1 className="text-5xl font-bold mb-3  max-320:mb-0 max-360:text-4xl max-360:mb-1 max-600:text-4xl">{rms}</h1>
            <p className=' max-320:text-xs max-600:text-sm mb-[2px]'>RMS Available</p>
          </div>
        </div>
        <div className="flex max-736:flex-col justify-between w-[50%]">
          <div className="text-center bg-pink-700 text-white h-24 rounded-lg p-2 w-[50%] max-600:w-[99%] max-736:w-[99%] mr-9  max-736:mb-4 max-736:mr-4  max-320:mr-1 max-320:h-16 ">
            <h1 className="text-5xl font-bold mb-3  max-320:mb-0 max-360:text-4xl max-360:mb-1 max-600:text-4xl">{deals}</h1>
            <p className=' max-320:text-xs max-600:text-sm'>Total Live Deals</p>
          </div>
          <div className="text-center bg-rose-600 text-white h-24 rounded-lg p-2 w-[50%] max-600:w-[99%] max-736:w-[99%] max-320:mr-1">
            <h1 className="text-5xl font-bold mb-3 max-320:mb-0 max-360:text-4xl max-360:mb-1 max-600:text-4xl">{sales}</h1>
            <p className=' max-320:text-xs max-600:text-sm'>Sales Generated</p>
          </div>
        </div>
      </div>
      <ChartsOverviewDemo/>
    </div>
  );
};

export default Dashbord;
