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
import { mainListItems, secondaryListItems } from "./listItems.js";

const drawerWidth = 240;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function Sidebar({ onCollapsedToggle, CollapseState }) {
  // const { onCollapsedToggle, isCollapsed } = props;
  const width_of_bar = getWindowDimensions();

  useEffect(() => {
    if (width_of_bar.width <= 450) {
      onCollapsedToggle();
    }
  }, []);

  return (
    <>
      <Drawer className="drawerStyle" variant="permanent" open={!CollapseState}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <Grid item xs sx={{ textAlign: "right" }}>
            <IconButton onClick={onCollapsedToggle}>
              {CollapseState ? (
                <ChevronRightIcon
                  sx={{ m: 1, color: "blue", fontWeight: 900 }}
                />
              ) : (
                <ChevronLeftIcon
                  sx={{ m: 1, color: "#FEDD00", fontWeight: 900 }}
                />
              )}
            </IconButton>
          </Grid>
        </Toolbar>

        <List component="nav" sx={{ border: "none" }}>
          {mainListItems}
          <Divider sx={{ my: 1, borderColor: "transparent" }} />
          {secondaryListItems}
        </List>
      </Drawer>
    </>
  );
}
