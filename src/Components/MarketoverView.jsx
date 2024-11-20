import React, { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { FaArrowTrendUp } from 'react-icons/fa6';

const MarketOverview = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component is mounted
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`bg-gray-100 mt-2 p-3 rounded-md w-[50%] max-600:w-[100%] transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <h1 className="flex">
        <FaArrowTrendUp className="mr-1" />
        Market Overview
      </h1>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        height={300}
      />
    </div>
  );
};

export default MarketOverview;
