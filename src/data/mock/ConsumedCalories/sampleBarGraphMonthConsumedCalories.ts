const sampleBarGraphMonthConsumedCalories = {
    labels: [
        '1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日',
        '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日',
        '21日', '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日', '31日'
    ],
    datasets: [
        {
            label: 'Consumed Calories (kcal)',
            data: [
                1800, 2100, 2300, 2400, 2000, 2500, 2600, 2200, 2100, 2300,
                2400, 2000, 2500, 2600, 2200, 2100, 2300, 2400, 2000, 2500,
                2600, 2200, 2100, 2300, 2400, 2000, 2500, 2600, 2200, 2100, 2300
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        },
    ],
};

export default sampleBarGraphMonthConsumedCalories;