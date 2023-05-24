import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import SubHeader from "./components/Hearts";
import Sidebar from "./components/sidebar";

import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

import { Box } from "@mui/material";

import "../src/css/App.css";

const drawerWidth = "100%";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    border: "none",

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    height: "100vh",
    backgroundColor: "transparent",
    ...(!open && {
      overflowX: "hidden",

      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

function App() {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const onCollapsedToggle = useCallback(() => {
    console.log("togled", isCollapsed);
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  return (
    <div className="App">
      <Box style={{ display: "flex", flexFlow: "row nowrap" }}>
        <Drawer variant="permanent" open={!isCollapsed}>
          <Sidebar onCollapsedToggle={onCollapsedToggle} />
        </Drawer>
        <Box>
          <SubHeader />
        </Box>
      </Box>
    </div>
  );
}

export default App;
