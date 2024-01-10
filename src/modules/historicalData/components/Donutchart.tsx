import { useState } from "react";

import ReactApexChart from "react-apexcharts";

import { uniqueColors } from "@/constants/constants";

export default function Donutchart({
  series,
  labels,
  loading,
  title,
}: {
  series: number[];
  labels: string[];
  loading: boolean;
  title: string;
}) {
  return (
    <div className="border border-[#091E4224] w-full">
      <div className="border-b p-3 bg-lightGray text-lg border-[#091E4224] ">
        <p className="font-bold">{title}</p>
      </div>

      <div className="chart-area d-flex align-items-center justify-content-center pb-0 h-96">
        {series[0] === 0 && series[1] === 0 ? (
          <p className="w-full h-full my-auto text-center flex justify-center items-center font-bold">
            No data to display!
          </p>
        ) : loading ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <Chart series={series} labels={labels} />
        )}
      </div>
    </div>
  );
}

const Chart = ({
  series: seriesData,
  labels: labelsData,
}: {
  series: number[];
  labels: string[];
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [options] = useState<any>({
    chart: {
      id: "pie-chart",
      type: "pie",
      animations: {
        enabled: false,
      },
    },

    colors: uniqueColors,
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    labels: labelsData,
    legend: {
      floating: false,
      position: "bottom",
      fontWeight: 600,
      fontFamily: "GothamPro",
      fontSize: "14px",

      labels: {
        colors: "var(--dark)",
      },
      markers: {
        radius: 0,
        offsetX: "-5px",
      },
      itemMargin: {
        vertical: 10,
        horizontal: 10,
      },
    },
    tooltip: {
      theme: "light",
      y: {
        formatter: undefined,
      },
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
  });
  return (
    <div className="w-100">
      <ReactApexChart
        options={options}
        series={seriesData}
        type="donut"
        height={400}
      />
    </div>
  );
};
