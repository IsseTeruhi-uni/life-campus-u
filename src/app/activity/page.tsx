"use client";
import AdvicePersonWithMessage from "@/components/AdvicePersonWithMessage";
import Bargraph from "@/components/BarGraph";
import PageHeader from "@/components/PageHeader";
import sampleBarGraphMonthIntakeCarolies from "@/data/mock/IntakeCalories/sampleBarGraphMonthIntakeCarolies";
import sampleBarGraphWeekIntakeCarolies from "@/data/mock/IntakeCalories/sampleBarGraphWeekIntakeCarolies";
import sampleBarGraphYearIntakeCarolies from "@/data/mock/IntakeCalories/sampleBarGraphYearIntakeCarolies";
import sampleBarGraphMonthSteps from "@/data/mock/Steps/sampleBarGraphMonthSteps";
import sampleBarGraphWeekSteps from "@/data/mock/Steps/sampleBarGraphWeekSteps";
import sampleBarGraphYearSteps from "@/data/mock/Steps/sampleBarGraphYearSteps";
import { Button, Card, Paper, type PaperProps, Text, Tabs } from "@mantine/core";
import { useState } from "react";

export default function Activity(props: PaperProps) {
    const [selectedStepsDate, setSelectedStepsDate] = useState<string>("thisWeek");
    const [selectedIntakeCaloriesDate, setSelectedIntakeCaloriesDate] = useState<string>("thisWeek");

    const handleStepsDateChange = (date: string) => {
        setSelectedStepsDate(date);
        console.log("Selected date:", date);
    };
    const handleIntakeCaroliesDateChange = (date: string) => {
        setSelectedIntakeCaloriesDate(date);
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
                <AdvicePersonWithMessage message="歩数は安定して推移しています。もう少し運動量を増やし消費カロリーを目標に近づけましょう!!" />
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
                <PageHeader title="運動歩数" withActions onDateChange={handleStepsDateChange} />
                <Card style={{ height: "400px" }}>{
                    selectedStepsDate === "thisWeek" ? (
                        <Bargraph graphData={sampleBarGraphWeekSteps} title={"今週の歩数推移(デモ)"} xtext={""} ytext={""} className={""} orientation={"vertical"} />
                    ) : selectedStepsDate === "thisMonth" ? (
                        <Bargraph graphData={sampleBarGraphMonthSteps} title={"今月の歩数推移(デモ)"} xtext={""} ytext={""} className={""} orientation={"vertical"} />
                    ) : (
                        <Bargraph graphData={sampleBarGraphYearSteps} title={"今年の歩数推移(デモ)"} xtext={""} ytext={""} className={""} orientation={"vertical"} />
                    )}
                </Card>
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
                <PageHeader title="消費カロリー" withActions onDateChange={handleIntakeCaroliesDateChange} />
                <Card style={{ height: "400px" }}>{
                    selectedIntakeCaloriesDate === "thisWeek" ? (
                        <Bargraph graphData={sampleBarGraphWeekIntakeCarolies} title={"今週の消費カロリー推移(デモ)"} xtext={""} ytext={""} className={""} orientation={"vertical"} />
                    ) : selectedIntakeCaloriesDate === "thisMonth" ? (
                        <Bargraph graphData={sampleBarGraphMonthIntakeCarolies} title={"今月の消費カロリー推移(デモ)"} xtext={""} ytext={""} className={""} orientation={"vertical"} />
                    ) : (
                        <Bargraph graphData={sampleBarGraphYearIntakeCarolies} title={"今年の消費カロリー推移(デモ)"} xtext={""} ytext={""} className={""} orientation={"vertical"} />
                    )}
                </Card>
            </Paper>
        </>
    )
}