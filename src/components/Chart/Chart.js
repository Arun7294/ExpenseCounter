import "./Chart.css";
import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValues= props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaxium = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          key={dataPoint.label}
          maxValue={totalMaxium}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
