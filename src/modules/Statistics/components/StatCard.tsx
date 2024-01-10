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
          <p className="text-lg inline-block text-black font-bold">
            {positive || 0}
          </p>
        </p>

        <p className="text-md pb-3 text-gray">
          Negative Deaths:{" "}
          <p className="text-lg text-black inline-block font-bold">
            {negative || 0}
          </p>
        </p>

        <p className="text-md pb-3 text-gray">
          Pending:{" "}
          <p className="text-lg text-black inline-block font-bold">
            {pending || 0}
          </p>
        </p>

        <p className="text-md pb-3 text-gray">
          hospitalized:{" "}
          <p className="text-lg text-black inline-block font-bold">
            {hospitalized || 0}
          </p>
        </p>

        <p className="text-md pb-3 text-gray">
          ICU:{" "}
          <p className="text-lg text-black inline-block font-bold">
            {inIcuCurrently || 0}
          </p>
        </p>

        <p className="text-md pb-3 text-gray">
          Ventilator:{" "}
          <p className="text-lg text-black inline-block font-bold">
            {onVentilatorCurrently || 0}
          </p>
        </p>
      </div>
    </div>
  );
};

export default StatCard;
