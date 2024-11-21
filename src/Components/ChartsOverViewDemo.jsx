import React, { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import MarketoverView from './MarketoverView';
import { useSpring, animated } from '@react-spring/web';
export default function ChartsOverviewDemo() {
  
    const networkChartAnimation = useSpring({
        from: { transform: 'translateX(-100%)' },
        to: { transform: 'translateX(0)' },
        config: { tension: 100, friction: 50 },
      });
      const teamChartAnimation = useSpring({
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0)' },
        config: { tension: 100, friction: 50 },
      });
    
    const initialData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        data: [5000, 6000, 3500, 2500],
    };

    
    const [teamData, setTeamData] = useState(initialData);
    const [selectedPeriodTeam, setSelectedPeriodTeam] = useState('quarterly');

    
    const [networkData, setNetworkData] = useState(initialData);
    const [selectedPeriodNetwork, setSelectedPeriodNetwork] = useState('quarterly');
    const [selectedTeamPeriod, setSelectedTeamPeriod] = useState("quarterly");
    const [selectedNetworkPeriod, setSelectedNetworkPeriod] = useState("quarterly");
    
    const handleTeamPeriodChange = (e) => {
        setSelectedTeamPeriod(e.target.value);
      };
     const myTeamData = {
    quarterly: [
      { id: 0, value: 10, label: 'Level 1' },
      { id: 1, value: 15, label: 'Level 2' },
      { id: 2, value: 20, label: 'Level 3' },
      { id: 3, value: 20, label: 'Level 4' },
    ],
    monthly: [
      { id: 0, value: 5, label: 'Level 1' },
      { id: 1, value: 10, label: 'Level 2' },
      { id: 2, value: 25, label: 'Level 3' },
      { id: 3, value: 30, label: 'Level 4' },
    ],
    weekly: [
      { id: 0, value: 3, label: 'Level 1' },
      { id: 1, value: 7, label: 'Level 2' },
      { id: 2, value: 15, label: 'Level 3' },
      { id: 3, value: 40, label: 'Level 4' },
    ],
    yearly: [
      { id: 0, value: 20, label: 'Level 1' },
      { id: 1, value: 25, label: 'Level 2' },
      { id: 2, value: 30, label: 'Level 3' },
      { id: 3, value: 25, label: 'Level 4' },
    ],
  };

  const myNetworkData = {
    quarterly: [
      { id: 0, value: 12, label: 'Level 1' },
      { id: 1, value: 18, label: 'Level 2' },
      { id: 2, value: 22, label: 'Level 3' },
      { id: 3, value: 15, label: 'Level 4' },
    ],
    monthly: [
      { id: 0, value: 8, label: 'Level 1' },
      { id: 1, value: 12, label: 'Level 2' },
      { id: 2, value: 20, label: 'Level 3' },
      { id: 3, value: 25, label: 'Level 4' },
    ],
    weekly: [
      { id: 0, value: 6, label: 'Level 1' },
      { id: 1, value: 10, label: 'Level 2' },
      { id: 2, value: 18, label: 'Level 3' },
      { id: 3, value: 40, label: 'Level 4' },
    ],
    yearly: [
      { id: 0, value: 20, label: 'Level 1' },
      { id: 1, value: 30, label: 'Level 2' },
      { id: 2, value: 25, label: 'Level 3' },
      { id: 3, value: 25, label: 'Level 4' },
    ],
  };
      
      const handleNetworkPeriodChange = (e) => {
        setSelectedNetworkPeriod(e.target.value);
      };
    const handlePeriodChangeTeam = (event) => {
        const selectedValue = event.target.value;
        setSelectedPeriodTeam(selectedValue);

        switch (selectedValue) {
            case 'yearly':
                setTeamData({
                    labels: ['2021', '2022', '2023', '2024'],
                    data: [5000, 6000, 3500, 2500], 
                });
                break;
            case 'quarterly':
                setTeamData({
                    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                    data: [5000, 6000, 3500, 2500], 
                });
                break;
            case 'monthly':
                setTeamData({
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [5000, 6000, 3500, 2500, 5000, 6000, 3500, 2500, 5000, 6000, 3500, 2500], 
                });
                break;
            case 'weekly':
                setTeamData({
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    data: [5000, 6000, 3500, 2500], 
                });
                break;
            default:
                setTeamData(initialData);
                break;
        }
    };

   
    const handlePeriodChangeNetwork = (event) => {
        const selectedValue = event.target.value;
        setSelectedPeriodNetwork(selectedValue);

        switch (selectedValue) {
            case 'yearly':
                setNetworkData({
                    labels: ['2021', '2022', '2023', '2024'],
                    data: [5000, 6000, 3500, 2500], 
                });
                break;
            case 'quarterly':
                setNetworkData({
                    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                    data: [5000, 6000, 3500, 2500], 
                });
                break;
            case 'monthly':
                setNetworkData({
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [5000, 6000, 3500, 2500, 5000, 6000, 3500, 2500, 5000, 6000, 3500, 2500], 
                });
                break;
            case 'weekly':
                setNetworkData({
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    data: [5000, 6000, 3500, 2500], 
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
                
                <div>
                    <h1 className="flex justify-start text-4xl text-slate-500 border-b-2 border-slate-500">
                        Sales
                    </h1>
                </div>
                <div className="flex max-600:flex-col">
                    
                    <div className="w-[49%] max-600:w-[99%] bg-gray-300 mt-2 p-3 rounded-md mr-2">
                        <div className="flex-col">
                            <h3 className="text-xl mt-2">My Team</h3>
                            <div className="flex justify-end">
                                
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
                            <animated.div style={networkChartAnimation}>
                            <BarChart
                                series={[{ data: teamData.data }]}
                                height={290}
                                xAxis={[{ data: teamData.labels, scaleType: 'band' }]}
                                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                            />
                             </animated.div>
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

                  
                    <div className="w-[49%] max-600:w-[99%] bg-gray-300 mt-2 p-3 rounded-md">
                        <div className="flex-col">
                            <h3 className="text-xl mt-2">My Network</h3>
                            <div className="flex justify-end">
                                
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
                            <animated.div style={teamChartAnimation}>
                            <BarChart
                                series={[{ data: networkData.data }]}
                                height={290}
                                xAxis={[{ data: networkData.labels, scaleType: 'band' }]}
                                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                            />
                            </animated.div>
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
                <div className="flex-col p-7 bg-gray-100 rounded-lg mt-2">
                   
                    <div>
                        <h1 className="flex justify-start text-4xl text-slate-500 border-b-2 border-slate-500">
                            Commision
                        </h1>
                    </div>
                    <div className="flex max-600:flex-col">
                       
                        <div className="w-[49%] max-600:w-[99%] bg-gray-300 mt-2 p-3 rounded-md mr-2">
                            <div className="flex-col">
                                <h3 className="text-xl mt-2">My Team</h3>
                                <div className="flex justify-end">
                                  
                                    <select
                                        onChange={handleTeamPeriodChange}
                                        value={selectedTeamPeriod}
                                        className="mb-4 p-2 rounded-md bg-gray-400"
                                    >
                                        <option value="quarterly">Quarterly</option>
                                        <option value="monthly">Monthly</option>
                                        <option value="weekly">Weekly</option>
                                        <option value="yearly">Yearly</option>
                                    </select>
                                </div>
                                <animated.div style={networkChartAnimation}>
                                <PieChart
                                   series={[{ data: myTeamData[selectedTeamPeriod] }]}
                                   height={200}
                                    
                                  
                                />
                                </animated.div>
                            </div>

                            <div className="border-t-2 border-slate-500">
                                <div className="flex">
                                    <p className="text-neutral-950 mr-2 mt-2">Registered Co-Ownership:</p>
                                    <h1 className="text-2xl">1,00,000</h1>
                                    
                                </div>
                                <div className="flex">
                                    <p className="text-neutral-950 mr-[75px] mt-2">Property Tokens:</p>
                                    <h1 className="text-2xl">1,00,000</h1>
                                    
                                </div>
                            </div>
                        </div>

                     
                        <div className="w-[49%] max-600:w-[99%] bg-gray-300 mt-2 p-3 rounded-md">
                            <div className="flex-col">
                                <h3 className="text-xl mt-2">My Network</h3>
                                <div className="flex justify-end">
                                   
                                    <select
                                       onChange={handleNetworkPeriodChange}
                                       value={selectedNetworkPeriod}
                                        className="mb-4 p-2 rounded-md bg-gray-400"
                                    >
                                        <option value="quarterly">Quarterly</option>
                                        <option value="monthly">Monthly</option>
                                        <option value="weekly">Weekly</option>
                                        <option value="yearly">Yearly</option>
                                    </select>

                                </div>
                                <animated.div style={teamChartAnimation}>
                                <PieChart
                                    series={[{ data: myNetworkData[selectedNetworkPeriod] }]}
                                    height={200}
                                />
                                </animated.div>
                                <div className="border-t-2 border-slate-500">
                                    <div className="flex">
                                        <p className="text-neutral-950 mr-2 mt-2">Registered Co-Ownership:</p>
                                        <h1 className="text-2xl">1,00,000</h1>
                                        
                                    </div>
                                    <div className="flex">
                                        <p className="text-neutral-950 mr-[75px] mt-2">Property Tokens: </p>
                                        <h1 className="text-2xl ">1,00,000</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MarketoverView/>
        </div>
    );
}
