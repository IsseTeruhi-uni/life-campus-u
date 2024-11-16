"use client";
import AdvicePersonWithMessage from "@/components/AdvicePersonWithMessage";
import Bargraph from "@/components/BarGraph";
import PageHeader from "@/components/PageHeader";
import sampleBarGraphMonthSleepScore from "@/data/mock/SleepScore/sampleBarGraphMonthSleepScore";
import sampleBarGraphMonthSleepTime from "@/data/mock/SleepTime/sampleBarGraphMonthSleepTime";
import sampleBarGraphWeekSleepScore from "@/data/mock/SleepScore/sampleBarGraphWeekSleepScore";
import sampleBarGraphWeekSleepTime from "@/data/mock/SleepTime/sampleBarGraphWeekSleepTime";
import sampleBarGraphYearSleepTime from "@/data/mock/SleepTime/sampleBarGraphYearSleepTime";
import sampleBarGraphYearSleepScore from "@/data/mock/SleepScore/sampleBarGraphYearSleepScore";
import { Button, Card, Paper, Tabs, type PaperProps, Text } from "@mantine/core";
import { useState } from "react";

export default function Sleep(props: PaperProps) {
    const [selectedTimeDate, setSelectedTimeDate] = useState<string>("thisWeek");
    const [selectedScoreDate, setSelectedScoreDate] = useState<string>("thisWeek");

    const handleTimeDateChange = (date: string) => {
        setSelectedTimeDate(date);
        console.log("Selected date:", date);
    };
    const handleScoreDateChange = (date: string) => {
        setSelectedScoreDate(date);
        console.log("Selected date:", date);
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
                <AdvicePersonWithMessage message="睡眠時間は概ねよく取れています。睡眠の質と位相が悪いようです。改善しましょう!!" />
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
                <PageHeader title="睡眠量" withActions onDateChange={handleTimeDateChange} />
                <Card style={{ height: "400px" }}>
                    {selectedTimeDate === "thisWeek" ? (
                        <Bargraph graphData={sampleBarGraphWeekSleepTime} title={"今週の睡眠時間推移(デモ)"} xtext={""} ytext={""} className={""} orientation={"vertical"} />
                    ) : selectedTimeDate === "thisMonth" ? (
                        <Bargraph graphData={sampleBarGraphMonthSleepTime} title={"今月の睡眠時間推移(デモ)"} xtext={""} ytext={""} className={""} orientation={"vertical"} />
                    ) : (
                        <Bargraph graphData={sampleBarGraphYearSleepTime} title={"今年の睡眠時間推移(デモ)"} xtext={""} ytext={""} className={""} orientation={"vertical"} />
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
                <PageHeader title="睡眠スコア" withActions onDateChange={handleScoreDateChange} />
                <Card style={{ height: "400px" }}>
                    {selectedScoreDate === "thisWeek" ? (
                        <Bargraph graphData={sampleBarGraphWeekSleepScore} title={"今週の睡眠スコア推移(デモ)"} xtext={""} ytext={""} className={""} orientation={"vertical"} />
                    ) : selectedScoreDate === "thisMonth" ? (
                        <Bargraph graphData={sampleBarGraphMonthSleepScore} title={"今月の睡眠スコア推移(デモ)"} xtext={""} ytext={""} className={""} orientation={"vertical"} />
                    ) : (
                        <Bargraph graphData={sampleBarGraphYearSleepScore} title={"今年の睡眠スコア推移(デモ)"} xtext={""} ytext={""} className={""} orientation={"vertical"} />
                    )}

                </Card>
            </Paper>
        </>
    )
}