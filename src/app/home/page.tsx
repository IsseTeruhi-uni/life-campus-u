"use client";
import PageHeader from "@/feature/PageHeader";
import { Carousel } from "@mantine/carousel";
import { Card, Paper, type PaperProps } from "@mantine/core";
import "@mantine/carousel/styles.css";

export default function Home(props: PaperProps) {
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
				<PageHeader title="睡眠" />
				<Carousel
					withIndicators
					height={300}
					slideSize="100%"
					slideGap="md"
					loop
					align="start"
					slidesToScroll={1}
				>
					<Carousel.Slide>
						<Card shadow="sm" padding="lg" style={{ height: 400 }}>
							1
						</Card>
					</Carousel.Slide>
					<Carousel.Slide>
						<Card shadow="sm" padding="lg" style={{ height: 400 }}>
							2
						</Card>
					</Carousel.Slide>
					<Carousel.Slide>
						<Card shadow="sm" padding="lg" style={{ height: 400 }}>
							3
						</Card>
					</Carousel.Slide>
				</Carousel>
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
					height={400}
					slideSize="100%"
					slideGap="md"
					loop
					align="start"
					slidesToScroll={1}
				>
					<Carousel.Slide>
						<Card shadow="sm" padding="lg" style={{ height: 400 }}>
							1
						</Card>
					</Carousel.Slide>
					<Carousel.Slide>
						<Card shadow="sm" padding="lg" style={{ height: 400 }}>
							2
						</Card>
					</Carousel.Slide>
					<Carousel.Slide>
						<Card shadow="sm" padding="lg" style={{ height: 400 }}>
							3
						</Card>
					</Carousel.Slide>
				</Carousel>
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
					height={400}
					slideSize="100%"
					slideGap="md"
					loop
					align="start"
					slidesToScroll={1}
				>
					<Carousel.Slide>
						<Card shadow="sm" padding="lg" style={{ height: 400 }}>
							1
						</Card>
					</Carousel.Slide>
					<Carousel.Slide>
						<Card shadow="sm" padding="lg" style={{ height: 400 }}>
							2
						</Card>
					</Carousel.Slide>
					<Carousel.Slide>
						<Card shadow="sm" padding="lg" style={{ height: 400 }}>
							3
						</Card>
					</Carousel.Slide>
				</Carousel>
			</Paper>
		</>
	);
}
