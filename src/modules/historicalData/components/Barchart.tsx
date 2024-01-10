import { useState } from "react";

import ReactApexChart from "react-apexcharts";

export default function Barchart({
  series,
  labels,
  loading,
  title,
}: {
  series: number[];
  labels: string[];
  title: string;
  loading: boolean;
}) {
  console.log(series, title);

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
  labels: labelsData,
}: {
  series: number[];
  labels: string[];
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [options] = useState<any>({
    chart: {
      type: "bar",
      height: 350,
    },
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
    xaxis: {
      categories: labelsData,
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
        series={[{ data: seriesData }]}
        type="bar"
        height={400}
      />
    </div>
  );
};
