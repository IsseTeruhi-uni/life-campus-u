import type { ChartData, ChartOptions } from "chart.js";
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    Title,
    Tooltip,
} from "chart.js/auto";
import { useRef } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, BarElement, Title, Tooltip, Legend);

interface BargraphProps {
    graphData: ChartData<"bar">;
    title: string;
    xtext: string;
    ytext: string;
    className: string;
    orientation: "vertical" | "horizontal";
}

const Bargraph = ({
    graphData,
    title,
    xtext,
    ytext,
    className,
    orientation,
}: BargraphProps) => {
    const chartRef = useRef<ChartJS<"bar", number[], string>>(null);
    const options: ChartOptions<"bar"> = {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: xtext,
                },
            },
            y: {
                title: {
                    display: true,
                    text: ytext,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: title,
            },
        },
        maintainAspectRatio: false,
        indexAxis: orientation === "horizontal" ? "y" : "x",
    };

    return (
        <Bar
            className={className}
            ref={chartRef}
            data={graphData}
            options={options}
        />
    );
};

export default Bargraph;
