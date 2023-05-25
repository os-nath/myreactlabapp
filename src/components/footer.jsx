import React from "react";
import { Box, Grid, ListItemButton } from "@mui/material";

import "../css/footer.css";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

export default function Footer({ isCollapsed, sidersize }) {
  var marginsidersize = parseInt(sidersize) + 40;

  return (
    <Box
      className="footer"
      sx={{ width: `calc(100% - ${sidersize}px)`, left: marginsidersize }}
    >
      <Grid container>
        <ListItemButton
          className="footerItems"
          // to={"/Support"}
          // component={Link}
        >
          {"Nathasha"}
        </ListItemButton>

        <ListItemButton
          className="footerItems"
          // to={"/Support"}
          // component={Link}
        >
          {"Support"}
        </ListItemButton>

        <ListItemButton
          className="footerItems"
          // to={"/Support"}
          // component={Link}
        >
          {"Help"}
        </ListItemButton>

        <ListItemButton
          className="footerItems"
          // to={"/Support"}
          // component={Link}
        >
          {"Center"}
        </ListItemButton>

        {/* <Grid xs={2} xl={2.5}>
          Support
        </Grid>
        <Grid xs={2} xl={2.5}>
          Help
        </Grid>
        <Grid xs={2} xl={2.5}>
          Center
        </Grid>
        <Grid xs={2} xl={2.5}>
          Terms of Service
        </Grid> */}

        <Box className="footerItemsNonClickable">
          <span>
            {"MinhaReactApp"} &copy; {new Date().getFullYear()} {"made in AUS"}
          </span>
        </Box>
      </Grid>
    </Box>
  );
}
