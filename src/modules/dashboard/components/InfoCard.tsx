import { Typography } from "@mui/material";
import React from "react";

type InfoCardProps = {
  title: string;
  value: string | number;
  color?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
};

const InfoCard = ({ title, value, color, icon: Icon }: InfoCardProps) => {
  return (
    <div className="bg-white flex flex-row justify-start items-center py-5 px-5 w-full border border-[#091E4224] rounded-lg shadow-md gap-8">
      <div>
        <Icon sx={{ color: color ? color : "#004D34" }} size="large" />
      </div>
      <div className="flex flex-col justify-evenly items-start">
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: 600,
            color: color ? color : "#004D34",
          }}
          variant="body1"
        >
          {value}
        </Typography>{" "}
        <Typography sx={{ color: "#000", fontWeight: "bold" }} variant="body1">
          {title}
        </Typography>{" "}
      </div>
    </div>
  );
};

export default InfoCard;
