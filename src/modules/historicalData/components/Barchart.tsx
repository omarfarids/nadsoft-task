import { forwardRef, useState } from "react";

import ReactApexChart from "react-apexcharts";

import { uniqueColors } from "@/constants/constants";

export default function Barchart({
  series,
  labels,
  loading,
}: {
  series: number[];
  labels: string[];
  loading: boolean;
}) {
  return (
    <div className="border border-[#091E4224] w-full">
      <div className="border-b p-3 bg-lightGray text-lg border-[#091E4224] ">
        <p className="font-bold">Historical Data</p>
        {/* <Dropdown options={data} value={value.name} setValue={setValue} /> */}
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

const Chart = forwardRef(
  ({
    series: seriesData,
    labels: labelsData,
  }: {
    series: number[];
    labels: string[];
  }) => {
    const [series] = useState(seriesData);
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
          title: {
            formatter: () => "USD",
          },
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
          series={series}
          type="donut"
          height={400}
        />
      </div>
    );
  }
);
