<template>
  <ECharts ref="chart" :option="option" style="height:300px" />
</template>

<script>
export default {
  data() {
    return {
      option: {
        tooltip: {},
        legend: {
          data: ["总业绩"],
        },
        xAxis: {
          data: [
            "2021-06-01",
            "2021-06-02",
            "2021-06-03",
            "2021-06-04",
            "2021-06-05",
            "2021-06-06",
            "2021-06-07",
            "2021-06-08",
            "2021-06-09",
            "2021-06-10",
            "2021-06-11",
            "2021-06-12",
          ],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            smooth: true,
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#D7E4FE", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#ffffff", // 100% 处的颜色
                  },
                ],
              },
            },
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    };
  },
};
</script>