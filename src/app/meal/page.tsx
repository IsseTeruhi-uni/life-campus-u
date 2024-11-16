"use client";
import AdvicePersonWithMessage from "@/components/AdvicePersonWithMessage";
import Bargraph from "@/components/BarGraph";
import PageHeader from "@/components/PageHeader";
import sampleBarGraphMonthConsumedCalories from "@/data/mock/ConsumedCalories/sampleBarGraphMonthConsumedCalories";
import sampleBarGraphWeekConsumedCalories from "@/data/mock/ConsumedCalories/sampleBarGraphWeekConsumedCalories";
import sampleBarGraphYearConsumedCalories from "@/data/mock/ConsumedCalories/sampleBarGraphYearConsumedCalories";
import sampleBarGraphMonthNutrientScore from "@/data/mock/NutrientScore/sampleBarGraphMonthNutrientScore";
import sampleBarGraphWeekNutrientScore from "@/data/mock/NutrientScore/sampleBarGraphWeekNutrientScore";
import sampleBarGraphYearNutrientScore from "@/data/mock/NutrientScore/sampleBarGraphYearNutrientScore";
import { Button, Card, Paper, type PaperProps, Tabs, Text } from "@mantine/core";
import { useState } from "react";

export default function Meal(props: PaperProps) {
    const [selectedConsumedCaloriesDate, setSelectedConsumedCaloriesDate] = useState<string>("thisWeek");
    const [selectedNutrientScoreDate, setSelectedNutrientScoreDate] = useState<string>("thisWeek");
    const handleConsumedCaloriesDateChange = (date: string) => {
        setSelectedConsumedCaloriesDate(date);
        console.log("Selected date:", date);
    };
    const handleNutrientScoreDateChange = (date: string) => {
        setSelectedNutrientScoreDate(date);
        console.log("selected date:", date);
    };
    return (
        <>
            <Paper
                radius="md"
                p="xl"
                withBorder
                {...props}
                mb={40}
                style={{
                    cursor: "pointer",
                    transition: "transform 0.2s",
                    ":hover": { transform: "scale(1.02)" },
                }}
            >
                <PageHeader title="AIアシスタント" />
                <AdvicePersonWithMessage message="摂取カロリーは適正範囲内で問題ないですが、摂取栄養素に偏りが見られます。食生活の改善を図りましょう!!" />
            </Paper>
            <Paper
                radius="md"
                p="xl"
                withBorder
                {...props}
                mb={40}
                style={{
                    cursor: "pointer",
                    transition: "transform 0.2s",
                    ":hover": { transform: "scale(1.02)" },
                }}
            >
                <PageHeader title="摂取カロリー" withActions onDateChange={handleConsumedCaloriesDateChange} />
                <Card style={{ height: "400px" }}>
                    {
                        selectedConsumedCaloriesDate === "thisWeek" ? (
                            <Bargraph graphData={sampleBarGraphWeekConsumedCalories} title={"今週の摂取カロリー推移(デモ)"} xtext={""} ytext={""} className={""} orientation={"vertical"} />
                        ) : selectedConsumedCaloriesDate === "thisMonth" ? (
                            <Bargraph graphData={sampleBarGraphMonthConsumedCalories} title={"今月の摂取カロリー推移(デモ)"} xtext={""} ytext={""} className={""} orientation={"vertical"} />
                        ) : (
                            <Bargraph graphData={sampleBarGraphYearConsumedCalories} title={"今年の摂取カロリー推移(デモ)"} xtext={""} ytext={""} className={""} orientation={"vertical"} />
                        )
                    }
                </Card>

            </Paper >
            <Paper
                radius="md"
                p="xl"
                withBorder
                {...props}
                mb={40}
                style={{
                    cursor: "pointer",
                    transition: "transform 0.2s",
                    ":hover": { transform: "scale(1.02)" },
                }}
            >
                <PageHeader title="摂取栄養スコア" withActions onDateChange={handleNutrientScoreDateChange} />
                <Card style={{ height: "400px" }}>
                    {
                        selectedNutrientScoreDate === "thisWeek" ? (
                            <Bargraph graphData={sampleBarGraphWeekNutrientScore} title={"今週の摂取栄養スコア推移(デモ)"} xtext={""} ytext={""} className={""} orientation={"vertical"} />
                        ) : selectedNutrientScoreDate === "thisMonth" ? (
                            <Bargraph graphData={sampleBarGraphMonthNutrientScore} title={"今月の摂取栄養スコア推移(デモ)"} xtext={""} ytext={""} className={""} orientation={"vertical"} />
                        ) : (
                            <Bargraph graphData={sampleBarGraphYearNutrientScore} title={"今年の摂取栄養スコア推移(デモ)"} xtext={""} ytext={""} className={""} orientation={"vertical"} />
                        )
                    }
                </Card>

            </Paper >
        </>
    )
}