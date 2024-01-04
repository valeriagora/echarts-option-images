"use client";
import { ReactECharts } from "@/components/ReactECharts";
import styles from "./page.module.css";

const seriesLabel = {
  show: true,
};
const weatherIcons = {
  Sunny:
    "https://images.unsplash.com/photo-1704187508554-5f38dbbb3495?q=80&w=2784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Cloudy:
    "https://images.unsplash.com/photo-1682685797769-481b48222adf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Showers:
    "https://images.unsplash.com/photo-1704173423733-d01e3466645a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
const option = {
  title: {
    text: "Weather Statistics",
  },
  legend: {
    data: ["City Alpha", "City Beta", "City Gamma"],
  },
  grid: {
    left: 140,
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "value",
    name: "Days",
    axisLabel: {
      formatter: "{value}",
    },
  },
  yAxis: {
    type: "category",
    inverse: true,
    data: ["Sunny", "Cloudy", "Showers"],
    axisLabel: {
      formatter: function (value: string) {
        return "{" + value + "| }{value|" + value + "}";
      },
      margin: 20,
      overflow: "break",
      width: 60,
      rich: {
        value: {
          lineHeight: 30,
          align: "center",
        },
        Sunny: {
          height: 40,
          // height: 32,
          padding: 10,
          // width: 40,
          align: "center",
          backgroundColor: {
            // width: 40,
            image: weatherIcons.Sunny,
          },
        },
        Cloudy: {
          height: 40,
          padding: 10,
          align: "center",
          backgroundColor: {
            image: weatherIcons.Cloudy,
          },
        },
        Showers: {
          height: 40,
          padding: 10,
          align: "center",
          backgroundColor: {
            image: weatherIcons.Showers,
          },
        },
      },
    },
  },
  series: [
    {
      name: "City Alpha",
      type: "bar",
      data: [165, 170, 30],
      label: seriesLabel,
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
