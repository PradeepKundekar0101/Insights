"use client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,  
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }: { data: { _id: string; count: number }[] }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Age',
      },
      tooltip: {
        callbacks: {
          title: () => '',
          label: (context: any) => {
            const dataIndex = context.dataIndex;

            const label = data[dataIndex]._id;
            const value = context.dataset.data[dataIndex];
            return `${label}: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        //display: false,
      },
    },
  };

  const labels = data.map((data) => data._id);
  const bardata = {
    labels,
    datasets: [
      {
        label: 'Age Distribution',
        data: data.map((data) => data.count),
        backgroundColor: '#525CEB',
      },
    ],
  };

  return <Bar options={options} data={bardata} />;
};

export default BarChart;
