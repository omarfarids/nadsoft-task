import { ReactNode, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { SideNav } from "./SideNav";
import { TopNav } from "./TopNav";
import { useLocation } from "react-router-dom";

const LayoutRoot = styled("div")(() => ({
  display: "flex",
  flex: "1 1 auto",
  width: "70%",
  margin: 25,
}));

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
      <div className="flex flex-row">
        <SideNav onClose={() => setOpenNav(false)} open={openNav} />
        <LayoutRoot>
          <LayoutContainer>{children}</LayoutContainer>
        </LayoutRoot>
      </div>
    </>
  );
};
