import React from "react";

type StatCardProps = {
  state: string | number | null;
  positive: string | number | null;
  negative: string | number | null;
  pending: string | number | null;
  hospitalized: string | number | null;
  inIcuCurrently: string | number | null;
  onVentilatorCurrently: string | number | null;
};

const StatCard = ({
  state,
  positive,
  negative,
  pending,
  hospitalized,
  inIcuCurrently,
  onVentilatorCurrently,
}: StatCardProps) => {
  return (
    <div className="bg-white w-72 w-full border border-[#091E4224] rounded-lg shadow-md gap-8">
      <div className="h-40 bg-lightGray text-[50px] flex justify-center items-center">
        {state}
      </div>
      <div className="p-5">
        <p className="text-md pb-3 text-gray">
          Positive Cases:{" "}
          <span className="text-lg inline-block text-black font-bold">
            {positive || 0}
          </span>
        </p>

        <p className="text-md pb-3 text-gray">
          Negative Deaths:{" "}
          <span className="text-lg text-black inline-block font-bold">
            {negative || 0}
          </span>
        </p>

        <p className="text-md pb-3 text-gray">
          Pending:{" "}
          <span className="text-lg text-black inline-block font-bold">
            {pending || 0}
          </span>
        </p>

        <p className="text-md pb-3 text-gray">
          hospitalized:{" "}
          <span className="text-lg text-black inline-block font-bold">
            {hospitalized || 0}
          </span>
        </p>

        <p className="text-md pb-3 text-gray">
          ICU:{" "}
          <span className="text-lg text-black inline-block font-bold">
            {inIcuCurrently || 0}
          </span>
        </p>

        <p className="text-md pb-3 text-gray">
          Ventilator:{" "}
          <span className="text-lg text-black inline-block font-bold">
            {onVentilatorCurrently || 0}
          </span>
        </p>
      </div>
    </div>
  );
};

export default StatCard;
