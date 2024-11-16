const sampleBargraphSleepStageData = {
    labels: ["覚醒状態", "浅い睡眠", "レム睡眠", "深い睡眠"],
    datasets: [
        {
            data: [0.9, 2.2, 3.3, 1.2],
            backgroundColor: [
                "rgba(255, 165, 0, 0.2)", // 濃いオレンジ
                "rgba(0, 0, 255, 0.2)", // 青色
                "rgba(138, 43, 226, 0.2)", // 薄い青っぽい紫色
                "rgba(0, 0, 128, 0.2)", // 紺色
            ],
            borderColor: [
                "rgba(255, 165, 0, 1)", // 濃いオレンジ
                "rgba(0, 0, 255, 1)", // 青色
                "rgba(138, 43, 226, 1)", // 薄い青っぽい紫色
                "rgba(0, 0, 128, 1)", // 紺色
            ],
            borderWidth: 1,
        },
    ],
};
export { sampleBargraphSleepStageData };
