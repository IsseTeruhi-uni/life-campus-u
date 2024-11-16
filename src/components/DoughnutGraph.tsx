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
import { Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale, ArcElement, Title, Tooltip, Legend);
interface DoughnutgraphProps {
    graphData: ChartData<"doughnut">;
    title: string;
    className: string;
}
export default function Doughnutgraph({
    graphData,
    title,
    className,
}: DoughnutgraphProps) {
    const chartRef = useRef<ChartJS<"doughnut", number[], string>>(null);

    const options: ChartOptions<"doughnut"> = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: title,
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <Doughnut
            className={className}
            ref={chartRef}
            data={graphData}
            options={options}
        />
    );
}
