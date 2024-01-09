import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, ButtonBase, Collapse } from "@mui/material";
import React from "react";
import { dashboardItems } from "@/types/layout";
import { LAYOUT_COLORS } from "@/assets/colors/layout";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export const SideNavItem = ({
  active,
  disabled,
  external,
  icon,
  path,
  title,
  children,
  onClick,
}: dashboardItems) => {
  const [open, setOpen] = React.useState(true);
  const { isLightMode } = useSelector((state: RootState) => state.global);

  // ------------- functions --------------
  const handleClick = () => {
    setOpen(!open);
  };

  const linkProps = !path
    ? {}
    : path
    ? external
      ? {
          component: "a",
          to: path,
          target: "_blank",
        }
      : {
          component: Link,
          to: path,
        }
    : {};

  return (
    <li>
      <ButtonBase
        onClick={() => {
          handleClick();
          onClick && onClick();
        }}
        sx={{
          alignItems: "center",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          pl: 2,
          gap: 1,
          color: LAYOUT_COLORS.sideBarTextColor,
          fontSize: 20,
          fontWeight: "bold",
          py: 2,
          ...(active && {
            backgroundColor: isLightMode
              ? LAYOUT_COLORS.sideBarItemActive
              : "#263038",
          }),
          width: 230,
          "&:hover": {
            bgcolor: isLightMode ? LAYOUT_COLORS.sideBarItemHover : "#545454",
          },
        }}
        {...linkProps}
      >
        {icon && (
          <Box
            component="span"
            sx={{
              ...(active && {
                color: "white",
              }),
            }}
          >
            {icon}
          </Box>
        )}
        {title}
      </ButtonBase>
      {children != undefined && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {children.map(
            (
              child: {
                path: string;
                active: boolean;
                icon: JSX.Element;
                title: string;
              },
              key: number
            ) => {
              const secondary_linkProps = child.path
                ? external
                  ? {
                      component: "a",
                      href: child.path,
                      target: "_blank",
                    }
                  : {
                      component: Link,
                      href: child.path,
                    }
                : {};
              return (
                <ButtonBase
                  key={key}
                  sx={{
                    alignItems: "center",
                    borderRadius: 1,
                    display: "flex",
                    justifyContent: "flex-start",
                    pl: 2,
                    py: "6px",
                    textAlign: "left",
                    width: "100%",
                    ...(child.active && {
                      backgroundColor: "#cdcdcd",
                    }),
                    "&:hover": {},
                    ...(active && {
                      backgroundColor: "#cdcdcd",
                    }),
                  }}
                  href="/clients"
                  {...secondary_linkProps}
                >
                  {icon && (
                    <Box
                      component="span"
                      sx={{
                        alignItems: "center",
                        color: "black",
                        display: "inline-flex",
                        justifyContent: "flex-start",

                        ...(active && {
                          color: "#cdcdcd",
                        }),
                      }}
                    >
                      {child.icon}
                    </Box>
                  )}
                  <Box
                    component="span"
                    sx={{
                      color: "black",
                      flexGrow: 1,
                      fontFamily: (theme) => theme.typography.fontFamily,
                      fontSize: 14,
                      fontWeight: 600,
                      lineHeight: "24px",
                      whiteSpace: "nowrap",
                      ...(active && {
                        color: "white",
                      }),
                      ...(disabled && {
                        color: "grey.500",
                      }),
                    }}
                  >
                    {child.title}
                  </Box>
                </ButtonBase>
              );
            }
          )}
        </Collapse>
      )}
    </li>
  );
};

SideNavItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  icon: PropTypes.node,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
};
