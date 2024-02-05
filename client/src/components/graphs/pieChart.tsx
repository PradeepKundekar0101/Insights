"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

 function PieChart({data}:{data:{_id:string,count:number}[]}) {
     const Piedata = {
        labels: data.map((d)=>{return d._id}),
        datasets: [
          {
            label: 'Gender Distribution',
            data:  data.map((d)=>{return d.count}),
            backgroundColor: [
              '#40A2E3',
              '#525CEB',
             
            ],
            borderColor:[
                "#0C2D57",
                "#0C2D57"
            ]
           
          },
        ],
      };
  return  <div className='w-[50%] mx-auto'> <Doughnut data={Piedata} /></div>;
}
export default PieChart;
