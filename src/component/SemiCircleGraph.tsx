import {
    ArcElement,
    CategoryScale,
    type ChartData,
    Chart as ChartJS,
    type ChartOptions,
    Legend,
    Title,
    Tooltip,
} from "chart.js/auto";
import { useRef } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(CategoryScale, ArcElement, Title, Tooltip, Legend);

interface SemiCircleGraphProps {
    graphData: ChartData<"pie">;
    title: string;
    className: string;
    achievedValue: number;
    targetValue: number;
}

export default function SemiCircleGraph({
    graphData,
    title,
    className,
    achievedValue,
    targetValue,
}: SemiCircleGraphProps) {
    const chartRef = useRef<ChartJS<"pie", number[], string>>(null);

    const achievementRate = ((achievedValue / targetValue) * 100).toFixed(2);

    const options: ChartOptions<"pie"> = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: `${title} - 達成率: ${achievementRate}%`,
            },
        },
        maintainAspectRatio: false,
        circumference: 180, // Half-pie chart
        rotation: -90, // Start from the top
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Pie
                className={className}
                ref={chartRef}
                data={graphData}
                options={options}
            />
        </div>
    );
}
