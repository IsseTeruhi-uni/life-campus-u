import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Chart, ChartData } from 'chart.js/auto';
import { Radar } from 'react-chartjs-2';
import { useRef } from 'react';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface RadarGraphProps {
    graphData: ChartData<'radar'>;
    title: string;
    className?: string;
    maxsuggest: number;
}

const RadarGraph = ({ graphData, title, className ,maxsuggest}: RadarGraphProps) => {
    const chartRef = useRef<ChartJS<'radar'>>(null);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: title,
            },
        },
        scales: {
            r: {
                angleLines: {
                    display: false,
                },
                suggestedMin: 0,
                suggestedMax: maxsuggest,
            },
        },
    };

    return (
        <Radar
            className={className}
            ref={chartRef}
            data={graphData}
            options={options}
        />
    );
};

export default RadarGraph;