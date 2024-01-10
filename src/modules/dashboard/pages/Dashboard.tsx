import React from "react";
import useGetData from "@/hooks/useGetData";
import StatFigures from "@/modules/dashboard/components/StatFigures";
import News from "@/modules/dashboard/components/News";
import Loading from "@/components/Loading";

const Dashboard = () => {
  // -------------- hooks ------------
  const { data, loading, error } = useGetData("/v1/us/20210301.json");

  // ------------- functions ---------------

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <p className="font-bold text-2xl mb-10">Dashboard</p>
      <p className="font-meduim text-sm my-3">
        last update on data (2021 - 03 - 01)
      </p>
      <StatFigures data={data} />

      <News />
    </div>
  );
};

export default Dashboard;
