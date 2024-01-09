import { SvgIcon } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { dashboardItems } from "@/types/layout";
import BarChartIcon from "@mui/icons-material/BarChart";
import HistoryIcon from "@mui/icons-material/History";
import CompareIcon from "@mui/icons-material/Compare";

export const items: dashboardItems[] = [
  {
    external: false,
    disabled: false,
    menu: false,
    title: "Dashboard",
    path: "/",
    module: "",
    icon: (
      <SvgIcon fontSize="small">
        <HomeIcon />
      </SvgIcon>
    ),
  },
  {
    external: false,
    disabled: false,
    menu: false,
    title: "Statistics",
    path: "/statistics",
    module: "statistics",
    icon: (
      <SvgIcon fontSize="small">
        <BarChartIcon />
      </SvgIcon>
    ),
  },
  {
    external: false,
    disabled: false,
    menu: false,
    title: "Historical Data",
    path: "/historical-data",
    module: "historical-data",
    icon: (
      <SvgIcon fontSize="small">
        <HistoryIcon />
      </SvgIcon>
    ),
  },
  {
    external: false,
    disabled: false,
    menu: false,
    title: "Data Comparison",
    path: "/data-comparison",
    module: "data-comparison",
    icon: (
      <SvgIcon fontSize="small">
        <CompareIcon />
      </SvgIcon>
    ),
  },
];
