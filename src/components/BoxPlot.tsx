import {
    BoxAndWiskers,
    BoxPlotController,
    type BoxPlotDataPoint,
} from "@sgratzl/chartjs-chart-boxplot";
import {
    CategoryScale,
    type ChartData,
    Chart as ChartJS,
    type ChartOptions,
    Legend,
    Title,
    Tooltip,
} from "chart.js/auto";
import { useRef } from "react";
import { Chart } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    BoxPlotController,
    BoxAndWiskers,
    Title,
    Tooltip,
    Legend
);

interface BoxplotProps {
    graphData: ChartData<"boxplot", BoxPlotDataPoint[], string>;
    title: string;
    xtext: string;
    ytext: string;
    className: string;
}

export default function Boxplotgraph({
    graphData,
    title,
    xtext,
    ytext,
    className,
}: BoxplotProps) {
    const chartRef = useRef<ChartJS<"boxplot", BoxPlotDataPoint[], string>>(null);
    const options: ChartOptions<"boxplot"> = {
        responsive: true,
        scales: {
            x: {
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
        <Chart
            type="boxplot"
            options={options}
            data={graphData}
            ref={chartRef}
            className={className}
        />
    );
}
