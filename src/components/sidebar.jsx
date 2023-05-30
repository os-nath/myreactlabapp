import React, { useEffect } from "react";
// import { env } from "../../config/env";

import {
  Divider,
  Drawer,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  List,
  Toolbar,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarBorderPurple500RoundedIcon from "@mui/icons-material/StarBorderPurple500Rounded";
import { mainListItems, secondaryListItems } from "./listItems.js";

import "../../src/css/sidebar.css";

const drawerWidth = 240;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function Sidebar({ onCollapsedToggle, isCollapsed }) {
  const width_of_bar = getWindowDimensions();
  console.log("CollapseState", isCollapsed);

  useEffect(() => {
    if (width_of_bar.width <= 450) {
      onCollapsedToggle();
    }
  }, []);

  return (
    <>
      <Drawer className="drawerStyle" variant="permanent" open={!isCollapsed}>
        <Toolbar className="toolBarStyle">
          <Grid item xs sx={{ textAlign: "right" }}>
            <IconButton
              onClick={onCollapsedToggle}
              sx={{ justifyContent: "flex-end", ml: 0 }}
            >
              {isCollapsed ? (
                <ChevronRightIcon className="collapsedSidebarIcon" />
              ) : (
                <ChevronLeftIcon className="openSidebarIcon" />
              )}
            </IconButton>
          </Grid>
        </Toolbar>

        <List component="nav" sx={{ border: "none" }}>
          {mainListItems}
          <Divider className="sidebarDivider" />
          {secondaryListItems}
        </List>
      </Drawer>
    </>
  );
}
