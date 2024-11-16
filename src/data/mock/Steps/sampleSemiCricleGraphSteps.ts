const sampleSemiCircleGraphSteps = {
    labels: ["歩数", "残り"],
    datasets: [
        {
            label: "1日の歩数(デモデータ)",
            data: [8000, 2000], // 例として、目標歩数が10000歩で、8000歩歩いた場合
            backgroundColor: [
                "rgba(75, 192, 192, 0.2)", // 緑色
                "rgba(201, 203, 207, 0.2)", // 灰色
            ],
            borderColor: [
                "rgba(75, 192, 192, 1)", // 緑色
                "rgba(201, 203, 207, 1)", // 灰色
            ],
            borderWidth: 1,
        },
    ],
};

export { sampleSemiCircleGraphSteps };