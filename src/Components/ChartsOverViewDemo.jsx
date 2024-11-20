import React, { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function ChartsOverviewDemo() {
  // Initial data for "Quarterly" (default selection)
  const initialData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    data: [5000, 26000, 7800, 78200],
  };

  // State for "My Team" chart
  const [teamData, setTeamData] = useState(initialData);
  const [selectedPeriodTeam, setSelectedPeriodTeam] = useState('quarterly');

  // State for "My Network" chart
  const [networkData, setNetworkData] = useState(initialData);
  const [selectedPeriodNetwork, setSelectedPeriodNetwork] = useState('quarterly');

  // Handle period change for "My Team"
  const handlePeriodChangeTeam = (event) => {
    const selectedValue = event.target.value;
    setSelectedPeriodTeam(selectedValue);

    switch (selectedValue) {
      case 'yearly':
        setTeamData({
          labels: ['2021', '2022', '2023', '2024'],
          data: [5000, 6000, 3500, 2500], // Example yearly data
        });
        break;
      case 'quarterly':
        setTeamData({
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          data: [5000, 6000, 3500, 2500], // Example quarterly data
        });
        break;
      case 'monthly':
        setTeamData({
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          data: [5000, 6000, 3500, 2500, 5000, 6000, 3500, 2500, 5000, 6000, 3500, 2500], // Example monthly data
        });
        break;
      case 'weekly':
        setTeamData({
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          data: [5000, 6000, 3500, 2500], // Example weekly data
        });
        break;
      default:
        setTeamData(initialData);
        break;
    }
  };

  // Handle period change for "My Network"
  const handlePeriodChangeNetwork = (event) => {
    const selectedValue = event.target.value;
    setSelectedPeriodNetwork(selectedValue);

    switch (selectedValue) {
      case 'yearly':
        setNetworkData({
          labels: ['2021', '2022', '2023', '2024'],
          data: [5000, 6000, 3500, 2500], // Example yearly data
        });
        break;
      case 'quarterly':
        setNetworkData({
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          data: [5000, 6000, 3500, 2500], // Example quarterly data
        });
        break;
      case 'monthly':
        setNetworkData({
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          data: [5000, 6000, 3500, 2500, 5000, 6000, 3500, 2500, 5000, 6000, 3500, 2500], // Example monthly data
        });
        break;
      case 'weekly':
        setNetworkData({
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          data: [5000, 6000, 3500, 2500], // Example weekly data
        });
        break;
      default:
        setNetworkData(initialData);
        break;
    }
  };

  return (
    <div className="flex-col">
      <div className="flex-col p-7 bg-gray-100 rounded-lg mt-2">
        {/* My Team Section */}
        <div>
          <h1 className="flex justify-start text-4xl text-slate-500 border-b-2 border-slate-500">
            Sales
          </h1>
        </div>
        <div className="flex max-600:flex-col">
          {/* My Team */}
          <div className="w-[49%] max-600:w-[99%] bg-gray-300 mt-2 p-3 rounded-md mr-2">
            <div className="flex-col">
              <h3 className="text-xl mt-2">My Team</h3>
              <div className="flex justify-end">
                {/* Dropdown for selecting time period for "My Team" */}
                <select
                  onChange={handlePeriodChangeTeam}
                  value={selectedPeriodTeam}
                  className="mb-4 p-2 rounded-md bg-gray-400"
                >
                  <option value="quarterly">Quarterly</option>
                  <option value="monthly">Monthly</option>
                  <option value="weekly">Weekly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
              <BarChart
                series={[{ data: teamData.data }]}
                height={290}
                xAxis={[{ data: teamData.labels, scaleType: 'band' }]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              />
            </div>

            <div className="border-t-2 border-slate-500">
              <div className="flex">
                <p className="text-neutral-950 mr-2 mt-2">Registered Co-Ownership:</p>
                <h1 className="text-2xl">1,00,000</h1>
                <p className="mt-2">#</p>
                <p className="text-sm text-red-900 mt-2">25</p>
              </div>
              <div className="flex">
                <p className="text-neutral-950 mr-[75px] mt-2">Property Tokens:</p>
                <h1 className="text-2xl">1,00,000</h1>
                <p className="mt-2">#</p>
                <p className="text-sm text-red-900 mt-2">25</p>
              </div>
            </div>
          </div>

          {/* My Network */}
          <div className="w-[49%] max-600:w-[99%] bg-gray-300 mt-2 p-3 rounded-md">
          <div className="flex-col">
            <h3 className="text-xl mt-2">My Network</h3>
            <div className="flex justify-end">
              {/* Dropdown for selecting time period for "My Network" */}
              <select
                onChange={handlePeriodChangeNetwork}
                value={selectedPeriodNetwork}
                className="mb-4 p-2 rounded-md bg-gray-400"
              >
                <option value="quarterly">Quarterly</option>
                <option value="monthly">Monthly</option>
                <option value="weekly">Weekly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <BarChart
              series={[{ data: networkData.data }]}
              height={290}
              xAxis={[{ data: networkData.labels, scaleType: 'band' }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
           <div className="border-t-2 border-slate-500">
              <div className="flex">
                <p className="text-neutral-950 mr-2 mt-2">Registered Co-Ownership:</p>
                <h1 className="text-2xl">1,00,000</h1>
                <p className="mt-2">#</p>
                <p className="text-sm text-lime-900 mt-2">25</p>
              </div>
              <div className="flex">
                <p className="text-neutral-950 mr-[75px] mt-2">Property Tokens: </p>
                <h1 className="text-2xl ">1,00,000</h1>
                <p className="mt-2">#</p>
                <p className="text-sm text-lime-900 mt-2">25</p>
              </div>
            </div>
          </div>

        </div>
        </div>
      </div>

      <div>
        <h1>Commission</h1>
      </div>
    </div>
  );
}
