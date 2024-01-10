import React, { useEffect, useState } from "react";
import Donutchart from "../components/Donutchart";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import useGetData from "@/hooks/useGetData";
import Datepicker from "@/components/Datepicker";
import Barchart from "../components/Barchart";
import Loading from "@/components/Loading";

const HistoricalData = () => {
  // -------------- hooks ------------
  const [url, setUrl] = useState<string | null>(null);
  const [date, setDate] = useState<string>("20200501");
  const globalState = useSelector((state: RootState) => state.global);
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const { data, loading, error } = useGetData(url);

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

  useEffect(() => {
    error ? setIsErrorMessage(true) : setIsErrorMessage(false);
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="font-bold text-2xl mb-10">
        <p>Historical Data</p>
      </div>
      <div className="mb-5">
        <Datepicker value={date} setValue={setDate} />
        {isErrorMessage && (
          <p className="text-red text-sm font-semibold py-1">
            Date is out of range
          </p>
        )}
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
            +data?.hospitalized || 0,
            +data?.hospitalizedIncrease || 0,
            +data?.negative || 0,
            +data?.negativeIncrease || 0,
            +data?.positive || 0,
            +data?.positiveIncrease || 0,
          ]}
          labels={[
            "Hospitalized",
            "Hospitalized Increase",
            "negative",
            "negative Increase",
            "positive",
            "positive Increase",
          ]}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default HistoricalData;
