import { useState } from "react";

import ReactApexChart from "react-apexcharts";

import { uniqueColors } from "@/constants/constants";

export default function Barchart({
  series,
  labels,
  loading,
  title,
}: {
  series: { name: string; data: number[] }[];
  labels: string[];
  title: string;
  loading: boolean;
}) {
  return (
    <div className="border border-[#091E4224] w-full my-5">
      <div className="border-b p-3 bg-lightGray text-lg border-[#091E4224] ">
        <p className="font-bold">{title}</p>
      </div>

      <div className="chart-area d-flex align-items-center justify-content-center pb-0">
        {series && series.length ? (
          <Chart series={series} labels={labels} />
        ) : loading ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <p className="w-full h-full my-auto text-center ">No data</p>
        )}
      </div>
    </div>
  );
}

const Chart = ({
  series: seriesData,
}: {
  series: { name: string; data: number[] }[];
  labels: string[];
}) => {
  const [series] = useState(seriesData);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [options] = useState<any>({
    chart: {
      type: "bar",
      height: 350,
    },
    colors: uniqueColors,
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },

    fill: {
      opacity: 1,
    },
  });
  return (
    <div className="w-100">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={400}
      />
    </div>
  );
};
