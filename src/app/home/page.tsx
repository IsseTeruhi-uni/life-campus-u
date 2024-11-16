"use client";
import PageHeader from "@/feature/PageHeader";
import { Carousel } from "@mantine/carousel";
import { Button, Card, Paper, type PaperProps } from "@mantine/core";
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
                <Button variant="outline" color="green" fullWidth mt="md">
                    睡眠アンケートに回答する
                </Button>
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
