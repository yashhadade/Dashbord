import React, { useState, useEffect } from 'react';

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
    animateNumber(0, setLeads);     
    animateNumber(55, setDeals);      
    animateNumber(0, setRms);         
  }, []);

  return (
    <div className="flex-col">
      <div className="m-7">
        <h1 className="text-5xl font-bold mb-3 text-emerald-400">Dashboard</h1>
        <p className="text-lg underline">Hi, Admin</p>
      </div>
      <div className="flex justify-start items-center bg-gray-100 p-4 rounded-lg shadow-md max-620:flex-col">
        <div className="flex max-736:flex-col">
          <div className="text-center bg-fuchsia-900 text-white h-24 rounded-lg p-2 w-[250px] mr-9 max-736:w-[360px] max-736:mb-4 max-736:mr-4 ">
            <h1 className="text-5xl font-bold mb-3">{leads}</h1>
            <p>Total Leads Registered</p>
          </div>
          <div className="text-center bg-amber-500 text-white h-24 rounded-lg p-2 w-96 mr-9 max-736:w-[360px] max-736:mr-4 max-736:mb-4">
            <h1 className="text-5xl font-bold mb-3">{rms}</h1>
            <p>RMs Available</p>
          </div>
        </div>
        <div className="flex max-736:flex-col">
          <div className="text-center bg-pink-700 text-white h-24 rounded-lg p-2 w-96 mr-9 max-736:w-[360px] max-736:mb-4 max-736:mr-4">
            <h1 className="text-5xl font-bold mb-3">{deals}</h1>
            <p>Total Live Deals</p>
          </div>
          <div className="text-center bg-rose-600 text-white h-24 rounded-lg p-2 w-96 max-736:w-[360px]">
            <h1 className="text-5xl font-bold mb-3">{sales}</h1>
            <p>Sales Generated</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
