import React, { useEffect, useState } from "react";
import Donutchart from "../components/Donutchart";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import useGetData from "@/hooks/useGetData";
import Datepicker from "@/components/Datepicker";
import Barchart from "../components/Barchart";

const HistoricalData = () => {
  // -------------- hooks ------------
  const [url, setUrl] = useState<string>("");
  const [date, setDate] = useState<string>("20200501");
  const globalState = useSelector((state: RootState) => state.global);
  const { data, loading } = useGetData(url);

  // ------------- functions ---------------

  // ------------- side effects ---------------
  useEffect(() => {
    setUrl(
      `/v1/states/${
        globalState?.USstate === "ALL"
          ? "ak/"
          : globalState?.USstate?.toLowerCase() + "/"
      }${date}.json`
    );
  }, [globalState?.USstate, date]);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  console.log(data);

  return (
    <div>
      <div className="font-bold text-2xl mb-10">
        <p>Historical Data</p>
      </div>
      <div className="mb-5">
        <Datepicker value={date} setValue={setDate} />
      </div>

      <div className="flex flex-col md:flex-row gap-5 justify-evenly">
        <Donutchart
          title="Positive/Negative"
          series={[data?.positive || 0, data?.negative || 0]}
          labels={["Positive", "Negative"]}
          loading={loading}
        />
        <Donutchart
          title="Hospitalized/Recovered"
          series={[data?.hospitalized || 0, data?.recovered || 0]}
          labels={["Hospitalized", "Recovered"]}
          loading={loading}
        />
      </div>
      <div>
        <Barchart
          title="Overall review"
          series={[
            {
              name: "Hospitalized",
              data: [+data?.hospitalized || 0],
            },
            {
              name: "Hospitalized Increase",
              data: [+data?.hospitalizedIncrease || 0],
            },
            {
              name: "negative",
              data: [+data?.negative || 0],
            },
            {
              name: "negative Increase",
              data: [+data?.negativeIncrease || 0],
            },
            {
              name: "positive",
              data: [+data?.positive || 0],
            },
            {
              name: "positive Increase",
              data: [+data?.positiveIncrease || 0],
            },
          ]}
          labels={["Hospitalized", "Recovered"]}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default HistoricalData;
