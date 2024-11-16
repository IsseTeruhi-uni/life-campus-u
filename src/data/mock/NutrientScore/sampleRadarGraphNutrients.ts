const sampleRadarGraphNutrientsData = {
    labels: ["エネルギー", "タンパク質", "脂質", "炭水化物", "食塩"],
    datasets: [
        {
            label: "1日の摂取栄養素スコア(デモデータ)",
            data: [4, 3.5, 2.0, 2.5, 3], // 例として、タンパク質50g、脂質70g、炭水化物300g、カルシウム20g,食塩6g、摂取スコアを示す
            backgroundColor: "rgba(54, 162, 235, 0.2)", // 青色
            borderColor: "rgba(54, 162, 235, 1)", // 青色
            borderWidth: 1,
        },
    ],
};

export { sampleRadarGraphNutrientsData };