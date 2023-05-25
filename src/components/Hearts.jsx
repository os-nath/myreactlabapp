import React from "react";

import { Box, Card } from "@mui/material";

import { Hearts } from "react-loader-spinner";

export default function SubHeader(props) {
  return (
    <>
      <Hearts
        height="80"
        width="200"
        color="#a461fb"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        alingText="center"
        sx={{ p: 100 }}
      />
    </>
  );
}
