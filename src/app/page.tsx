"use client";
import { ReactECharts } from "@/components/ReactECharts";
import { graphic } from "echarts";
import styles from "./page.module.css";
// import "echarts/lib/component/grid";

const images = {
  Sunny:
    "https://images.unsplash.com/photo-1704187508554-5f38dbbb3495?q=80&w=2784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Cloudy:
    "https://images.unsplash.com/photo-1682685797769-481b48222adf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Showers:
    "https://images.unsplash.com/photo-1704173423733-d01e3466645a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
const renderWeather = function (param: any, api: any) {
  const point = api.coord([0, 2]);
  console.log("p", point);

  return {
    type: "group",
    children: [
      {
        type: "image",
        style: {
          image: api.value(2),
          x: 2,
          y: 2,
          width: 72,
          height: 72,
        },
        position: [point[0], point[1]],
        // position: [480, 211], // 480, 0 // 69, 140, 211
      },
      // {
      //   type: "text",
      //   style: {
      //     text: "text" + "°",
      //     textFont: api.font({ fontSize: 14 }),
      //     textAlign: "center",
      //     textVerticalAlign: "bottom",
      //   },
      //   position: [point[0], 80],
      // },
    ],
  };
};
const option = {
  xAxis: [
    {
      // data: [1, 2, 3, 4],
      name: "X",
      type: "value",
      inverse: true,
      splitLine: {
        show: true,
      },
      axisTick: {
        show: true,
      },
      axisLabel: {
        show: true,
      },
      axisLine: {
        show: true,
      },
    },
  ],
  grid: {
    top: 0,
    bottom: 28,
    right: "50%",
  },
  yAxis: {
    name: "Yy",
    // data: [1, 2, 3, 4],
    data: ["engaging", "exciting", "intriguing", "close-ended"],
    position: "right",
    type: "category",
    splitLine: {
      show: true,
    },
    axisTick: {
      // length: 74,
      show: true,
    },
    axisLabel: {
      margin: 8 + 72 + 8,

      show: true,
    },
    axisLine: {
      show: true,
    },
  },
  series: [
    {
      type: "custom",
      renderItem: renderWeather,
      data: [
        // [0, 10, images.Cloudy, 40],
        // [10, 20, images.Showers, 40],
        [0, 10, images.Sunny],
      ],
      // yAxisIndex: 2,
      z: 11,
    },
    {
      type: "bar",
      barWidth: 16,
      itemStyle: {
        color: "#25B4C8",
      },
      data: [10, 20, 30, 40],
    },
  ],
};

export default function Home() {
  return (
    <main className={styles.main}>
      <ReactECharts option={option} />
    </main>
  );
}
