const sampleSemiCircleGraphConsumedCaloriesData = {
    labels: ["消費カロリー", "残り"],
    datasets: [
        {
            label: "1日の消費カロリー(デモデータ)",
            data: [1600, 900], // 例として、目標消費カロリーが2200kcalで、2500kcal消費した場合、残りは0kcal
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)", // 赤色
                "rgba(201, 203, 207, 0.2)", // 灰色
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)", // 赤色
                "rgba(201, 203, 207, 1)", // 灰色
            ],
            borderWidth: 1,
        },
    ],
};

export { sampleSemiCircleGraphConsumedCaloriesData };