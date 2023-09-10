import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { ChartDataset } from '../../types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
    },
    plugins: {
        tooltip: {
            callbacks: {
                label: (item:any) => `${item.dataset.label}: ${item.formattedValue} °C`,
            },
        },
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
};

const Chart = ({ labels, data, name }: ChartDataset) => {
    const chartData = {
        labels,
        datasets: [
            {
                label: name,
                data,
                borderColor: '#3B82F6',
                backgroundColor: '#3B82F6',
            },
        ],
    };
    return (
        <div className="pt-4 grow flex flex-col">
            <h5 className="font-bold">Temperature during the day</h5>
            <div className="pt-4 grow">
                <Line data={chartData} options={options} />
            </div>
        </div>
    );
};

export default Chart;
