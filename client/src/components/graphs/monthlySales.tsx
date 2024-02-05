"use client"
import React, { useEffect, useState } from 'react'
import {generateMonthLabels} from '../../utils/months'
import LineChart from './LineChart';
const MonthlySales = ({ data }: { data: { _id: number; sales: { k: number; v: number }[] }[] }) => {
    const years = data.map((e) => e._id);
    const [currYear, setCurYear] = useState<number>(years.length - 1);
    const [currYearData, setCurrData] = useState<{ k: number; v: number }[] | undefined>(data.at(years.length - 1)?.sales);
    const values = currYearData?.map((e) => e.v);
    const labels = generateMonthLabels();
  
    const graphData = {
      labels: labels,
      datasets: [
        {
          label: 'Monthly sales',
          data: values,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };
  
    useEffect(() => {
      setCurrData(data.at(currYear)?.sales);
    }, [currYear, data]);
  
    return (
      <div className='bg-slate-100  dark:bg-[#1a1c24] w-full md:w-[50%] mb-4 md:mb-0 px-2 rounded-md shadow-md mt-4 lg:mt-0'>
        <div className='flex justify-between'>
          <h1 className='text-slate-700 dark:text-slate-300 text-2xl font-semibold m-2 mb-0'>Monthly Sales</h1>
          <select className='py-2  rounded-md  m-2 px-4 bg-[rgb(75, 192, 192)] dark:text-white' value={currYear} onChange={(e) => setCurYear(Number(e.target.value))}>
            {years.map((year, ind) => (
              <option key={ind} value={ind}>
                {year}
              </option>
            ))}
          </select>
        </div>
       
        <div className=''>
          <LineChart data={graphData} />
        </div>
     
      </div>
    );
  };
  
  export default MonthlySales;