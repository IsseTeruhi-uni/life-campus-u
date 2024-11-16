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
interface PiegraphProps {
    graphData: ChartData<"pie">;
    title: string;
    className: string;
}
export default function Piegraph({
    graphData,
    title,
    className,
}: PiegraphProps) {
    const chartRef = useRef<ChartJS<"pie", number[], string>>(null);

    const options: ChartOptions<"pie"> = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: title,
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <Pie
            className={className}
            ref={chartRef}
            data={graphData}
            options={options}
        />
    );
}
