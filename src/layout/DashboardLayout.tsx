import { ReactNode, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { SideNav } from "./SideNav";
import { TopNav } from "./TopNav";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

const LayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  width: "100%",
});

export const DashboardLayout = (props: { children: ReactNode }) => {
  const { children } = props;
  const { pathname } = useLocation();
  const [openNav, setOpenNav] = useState(true);

  useEffect(() => {
    if (openNav) {
      setOpenNav(false);
    }
  }, [pathname]);

  return (
    <>
      <TopNav onNavOpen={() => setOpenNav(true)} />
      <div className="">
        <SideNav onClose={() => setOpenNav(false)} open={openNav} />

        <Box sx={{ p: 5, ml: { lg: 30, sx: 0 } }}>
          <LayoutContainer>{children}</LayoutContainer>
        </Box>
      </div>
    </>
  );
};
