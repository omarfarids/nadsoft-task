import React, { useEffect, useState } from "react";
import useGetData from "@/hooks/useGetData";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import StatCard from "../components/StatCard";

const Statistics = () => {
  // -------------- hooks ------------
  const [url, setUrl] = useState<string | null>(null);
  const globalState = useSelector((state: RootState) => state.global);
  const { data, loading, error } = useGetData(url);

  // ------------- functions ---------------

  // ------------- side effects ---------------
  useEffect(() => {
    setUrl(
      `/v1/states/${
        globalState.USstate === "ALL"
          ? ""
          : globalState?.USstate?.toLowerCase() + "/"
      }current.json`
    );
  }, [globalState.USstate]);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <p className="font-bold text-2xl mb-10">Current statistics</p>
      <div className="flex flex-row gap-5 flex-wrap">
        {Array.isArray(data) ? (
          data?.map(
            (
              item: {
                state: string | number | null;
                positive: string | number | null;
                negative: string | number | null;
                pending: string | number | null;
                hospitalized: string | number | null;
                inIcuCurrently: string | number | null;
                onVentilatorCurrently: string | number | null;
              },
              index
            ) => {
              return <StatCard key={index} {...item} />;
            }
          )
        ) : (
          <StatCard {...data} />
        )}
      </div>
    </div>
  );
};

export default Statistics;
