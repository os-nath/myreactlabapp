import React from "react";

import { Box, Card } from "@mui/material";

import { Hearts } from "react-loader-spinner";

export default function SubHeader(props) {
  return (
    <>
      <Box className="appCenter">
        <code>
          Edita a <span className="editable">vida</span>, atualiza e segue o
          baile!
        </code>
      </Box>
      <Box className="appCenter">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ p: 100 }}
        >
          Ongoing learning
        </a>{" "}
      </Box>
      <br />
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
