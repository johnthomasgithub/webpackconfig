import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import Dropdown from "./Dropdown";

const Chart = ({ title, type }: any) => {
  const [lineData, setLineData] = useState(false);
  const [pieData, setPieData] = useState(false);
  const graphConfig = {
    notMerge: true,
    lazyUpdate: true,
    style: {
      left: 0,
      height: "300px",
      top: 0,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justityContent: "center",
    },
    opts: { renderer: "svg" },
  };
  if (type === "line") {
    const data = {
      legend: {
        data: ["User", "Agent"],
        icon: "pin",
        right: 110,
      },
      color: ["#9BDD7C", "#E9A0A0"],
      xAxis: {
        type: "category",
        data: ["Week1", "Week2", "Week3", "Week4", "Week5", "Week6"],
      },
      yAxis: {
        type: "value",
        data: [0, 100, 200, 300, 400, 500],
      },
      series: lineData
        ? [
            {
              name: "User",
              data: [300, 120, 200, 50, 400, 20, 600],
              type: "line",
              smooth: true,
            },
            {
              name: "Agent",
              data: [400, 90, 300, 10, 500, 700, 700],
              type: "line",
              smooth: true,
            },
          ]
        : [
            {
              name: "User",
              data: [100, 10, 400, 10, 100, 400, 600],
              type: "line",
              smooth: true,
            },
            {
              name: "Agent",
              data: [300, 10, 500, 60, 20, 200, 700],
              type: "line",
              smooth: true,
            },
          ],
    };
    return (
      <div className="chart-parent">
        <div className="chart-title">{title}</div>
        <Dropdown changer={lineData} onchange={setLineData} />

        <div className="chart-wrapper">
          <ReactECharts
            option={data}
            notMerge={graphConfig.notMerge}
            lazyUpdate={graphConfig.lazyUpdate}
            opts={{ renderer: "svg" }}
            style={graphConfig.style}
            //   onChartReady={onChartReadyCallback}
            //   onEvents={EventsDict}
          />
        </div>
      </div>
    );
  }

  if (type === "pie") {
    const option = {
      color: ["#F6DC7D", "#98D89E", "#EE8484"],
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        right: 35,
        top: 100,
        icon: "pin",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "60%",
          center: ["30%", 150],
          label: {
            show: false,
          },
          data: pieData
            ? [
                { value: 1048, name: "Basic Tees" },
                { value: 735, name: "Custom Short Pants" },
                { value: 735, name: "Super Hoodies" },
              ]
            : [
                { value: 48, name: "Basic Tees" },
                { value: 1235, name: "Custom Short Pants" },
                { value: 25, name: "Super Hoodies" },
              ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    const Config = {
      notMerge: true,
      lazyUpdate: true,
      style: {
        left: 0,
        height: "300px",
        top: 0,
        width: "100%",
        display: "flex",
        alignItems: "flexStart",
        justityContent: "center",
      },
      opts: { renderer: "svg" },
    };
    return (
      <div className="chart-parent">
        <div className="chart-title">{title}</div>
        <Dropdown changer={pieData} onchange={setPieData} />
        <div className="chart-wrapper">
          <ReactECharts
            option={option}
            notMerge={graphConfig.notMerge}
            lazyUpdate={graphConfig.lazyUpdate}
            opts={{ renderer: "svg" }}
            style={Config.style}
            //   onChartReady={onChartReadyCallback}
            //   onEvents={EventsDict}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="chart-parent">
      <div className="chart-title">{title}</div>
      <div className="outer">
        <div className="container" style={{ borderColor: "#6972C3" }}>
          <div>Meeting with suppliers from Kuta Bali</div>
          <div>14.00-15.00</div>
          <div>at Sunset Road, Kuta, Bali </div>
        </div>
        <div className="container" style={{ borderColor: "#9BDD7C" }}>
          <div>Check operation at Giga Factory 1</div>
          <div>18.00-15.00</div>
          <div>at Central Jakarta </div>
        </div>
        <div className="container" style={{ borderColor: "#6972C3" }}>
          <div>Meeting with suppliers from Kuta Bali</div>
          <div>14.00-15.00</div>
          <div>at Sunset Road, Kuta, Bali </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
