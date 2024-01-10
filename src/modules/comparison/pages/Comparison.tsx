import React from "react";
import Table from "../components/Table";
import useGetData from "@/hooks/useGetData";

const Comparison = () => {
  // -------------- hooks ------------
  const { data, loading, error } = useGetData("/v1/states/current.json");

  // ------------- functions ---------------

  // ------------- side effects ---------------

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <p className="font-bold text-2xl mb-10">State Comparison</p>
      <div>
        <Table
          data={data}
          title={[
            { label: "State", key: "state" },
            { label: "Death", key: "death" },
            { label: "Positive", key: "positive" },
            { label: "Negative", key: "negative" },
            { label: "Hospitalized", key: "hospitalized" },
            { label: "Recovered", key: "recovered" },
          ]}
        />
      </div>
    </div>
  );
};

export default Comparison;
