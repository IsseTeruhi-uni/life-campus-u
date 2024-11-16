"use client";
import PageHeader from "@/components/PageHeader";
import { Carousel } from "@mantine/carousel";
import { Button, Card, Paper, type PaperProps } from "@mantine/core";
import "@mantine/carousel/styles.css";
import Piegraph from "@/components/DoughnutGraph";
import { samplePieGraphSleepTimetData } from "@/data/mock/samplePieGraphSleepTime";
import Bargraph from "@/components/BarGraph";
import { sampleBargraphSleepStageData } from "@/data/mock/sampleBarGraphSleepStage";
import RadarGraph from "@/components/RadarGraph";
import sampleRadarGraphSleepScore from "@/data/mock/sampleRadarGraphSleepScore";
import SemiCircleGraph from "@/components/SemiCircleGraph";
import { sampleSemiCircleGraphStepsData } from "@/data/mock/sampleSemiCricleGraphSteps";
import { sampleSemiCircleGraphConsumedCaloriesData } from "@/data/mock/sampleSemiCricleGraphConsumedCalories";
import { sampleRadarGraphNutrientsData } from "@/data/mock/sampleRadarGraphNutrients";
import AdvicePersonWithMessage from "@/components/AdvicePersonWithMessage";
import { sampleSemiCircleGraphIntakeCaloriesData } from "@/data/mock/sampleSemiCricleGraphIntakedCalories";
import { useRouter } from "next/navigation";

export default function Home(props: PaperProps) {
	const router = useRouter();
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
				<AdvicePersonWithMessage message="摂取カロリーに比べて消費カロリーが少ないです。もう少し運動しましょう!!" />
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
				<PageHeader title="睡眠" />
				<Carousel
					withIndicators
					height={300}
					slideSize="100%"
					slideGap="md"
					loop
					align="center"
					slidesToScroll={1}
					style={{ maxWidth: "100%" }}
				>
					<Carousel.Slide>
						<Card shadow="sm" padding="lg" style={{ width: "98%", height: 290, display: "flex", justifyContent: "center", alignItems: "center" }}>
							<Piegraph graphData={samplePieGraphSleepTimetData} title={"1日の睡眠量(デモ)"} className={""}></Piegraph>
						</Card>
					</Carousel.Slide>
					<Carousel.Slide>
						<Card shadow="sm" padding="lg" style={{ width: "98%", height: 290, display: "flex", justifyContent: "center", alignItems: "center" }}>
							<Bargraph graphData={sampleBargraphSleepStageData} title={"1日の睡眠段階(デモ)"} xtext={""} ytext={""} className={""} orientation={"horizontal"}></Bargraph>
						</Card>
					</Carousel.Slide>
					<Carousel.Slide>
						<Card shadow="sm" padding="lg" style={{ width: "98%", height: 290, display: "flex", justifyContent: "center", alignItems: "center" }}>
							<RadarGraph graphData={sampleRadarGraphSleepScore} title={"1日睡眠スコア(デモ)"} className={""} maxsuggest={4}></RadarGraph>
						</Card>
					</Carousel.Slide>
				</Carousel>
				<Button variant="outline" color="green" fullWidth mt="md">
					睡眠アンケートに回答する
				</Button>
				<Button variant="outline" color="blue" fullWidth mt="md" onClick={() => router.push('/sleep')}>
					詳細を確認する
				</Button>
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
				<PageHeader title="運動" />
				<Carousel
					withIndicators
					height={300}
					slideSize="100%"
					slideGap="md"
					loop
					align="center"
					slidesToScroll={1}
					style={{ maxWidth: "100%" }}
				>
					<Carousel.Slide>
						<Card shadow="sm" padding="lg" style={{ width: "98%", height: 290, display: "flex", justifyContent: "center", alignItems: "center" }}>
							<SemiCircleGraph graphData={sampleSemiCircleGraphConsumedCaloriesData} title={"1日の消費カロリー(デモ)"} className={""} achievedValue={1600} targetValue={2500}></SemiCircleGraph>
						</Card>
					</Carousel.Slide>
					<Carousel.Slide>
						<Card shadow="sm" padding="lg" style={{ width: "98%", height: 290, display: "flex", justifyContent: "center", alignItems: "center" }}>
							<SemiCircleGraph graphData={sampleSemiCircleGraphStepsData} title={"1日の歩数(デモ)"} className={""} achievedValue={8000} targetValue={10000}></SemiCircleGraph>
						</Card>
					</Carousel.Slide>

					{/* <Carousel.Slide>
						<Card shadow="sm" padding="lg" style={{ width: "98%", height: 290, display: "flex", justifyContent: "center", alignItems: "center" }}>
							3
						</Card>
					</Carousel.Slide> */}
				</Carousel>
				<Button variant="outline" color="blue" fullWidth mt="md">
					詳細を確認する
				</Button>
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
				<PageHeader title="食事" />
				<Carousel
					withIndicators
					height={300}
					slideSize="100%"
					slideGap="md"
					loop
					align="center"
					slidesToScroll={1}
					style={{ maxWidth: "100%" }}
				>
					<Carousel.Slide>
						<Card shadow="sm" padding="lg" style={{ width: "98%", height: 290, display: "flex", justifyContent: "center", alignItems: "center" }}>
							<SemiCircleGraph graphData={sampleSemiCircleGraphIntakeCaloriesData} title={"1日の摂取カロリー(デモ)"} className={""} achievedValue={2400} targetValue={2200}></SemiCircleGraph>
						</Card>
					</Carousel.Slide>
					<Carousel.Slide>
						<Card shadow="sm" padding="lg" style={{ width: "98%", height: 290, display: "flex", justifyContent: "center", alignItems: "center" }}>
							<RadarGraph graphData={sampleRadarGraphNutrientsData} title={"1日の食事栄養素スコア(デモ)"} className={""} maxsuggest={4}></RadarGraph>
						</Card>
					</Carousel.Slide>
					{/* <Carousel.Slide>
						<Card shadow="sm" padding="lg" style={{ width: "98%", height: 290, display: "flex", justifyContent: "center", alignItems: "center" }}>
							3
						</Card>
					</Carousel.Slide> */}
				</Carousel>
				<Button variant="outline" color="green" fullWidth mt="md">
					食事を記録する
				</Button>
				<Button variant="outline" color="blue" fullWidth mt="md">
					詳細を確認する
				</Button>
			</Paper>
		</>
	);
}
