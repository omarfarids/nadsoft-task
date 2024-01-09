import React from "react";
import { numberFormater } from "../../../utils/functions";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import SignalCellularConnectedNoInternet0BarIcon from "@mui/icons-material/SignalCellularConnectedNoInternet0Bar";
import HealingIcon from "@mui/icons-material/Healing";
import MasksIcon from "@mui/icons-material/Masks";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import InfoCard from "../components/InfoCard";

type StatFiguresProps = {
  death: string | number;
  deathIncrease: string | number;
  hospitalized: string | number;
  hospitalizedIncrease: string | number;
  positive: string | number;
  positiveIncrease: string | number;
  negative: string | number;
  negativeIncrease: string | number;
};

const StatFigures = ({ data }: { data: StatFiguresProps }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5 pb-5">
        <InfoCard
          title={"Death count"}
          value={numberFormater(data?.death)}
          color="black"
          icon={WarningAmberIcon}
        />
        <InfoCard
          title={"Death Increase"}
          value={numberFormater(data?.deathIncrease)}
          color="gray"
          icon={SignalCellularConnectedNoInternet0BarIcon}
        />
        <InfoCard
          title={"Hospitalized cases"}
          value={numberFormater(data?.hospitalized)}
          color="orange"
          icon={LocalHospitalIcon}
        />
        <InfoCard
          title={"Hospitalized cases increase"}
          value={numberFormater(data?.hospitalizedIncrease)}
          color="purple"
          icon={HealingIcon}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <InfoCard
          icon={MasksIcon}
          title={"Positive cases"}
          value={numberFormater(data?.positive)}
          color="red"
        />
        <InfoCard
          title={"Positive cases Increase"}
          value={numberFormater(data?.positiveIncrease)}
          color="blue"
          icon={UpcomingIcon}
        />
        <InfoCard
          title={"Negative cases"}
          value={numberFormater(data?.negative)}
          color="green"
          icon={CheckCircleIcon}
        />
        <InfoCard
          title={"Negative cases increase"}
          value={numberFormater(data?.negativeIncrease)}
          color="blue"
          icon={TrendingUpIcon}
        />
      </div>
    </div>
  );
};

export default StatFigures;
