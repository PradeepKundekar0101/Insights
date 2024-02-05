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

const BarChart = ({ data }: { data: { totalSales: number; title: string }[] }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Sales',
      },
      tooltip: {
        callbacks: {
          title: () => '',
          label: (context: any) => {
            const dataIndex = context.dataIndex;

            const label = data[dataIndex].title;
            const value = context.dataset.data[dataIndex];
            return `${label}: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
    },
  };

  const labels = data.map((data) => data.title);
  const bardata = {
    labels,
    datasets: [
      {
        label: 'Product wise sales',
        data: data.map((data) => data.totalSales),
        backgroundColor: '#525CEB',
      },
    ],
  };

  return <Bar options={options} data={bardata} />;
};

export default BarChart;
