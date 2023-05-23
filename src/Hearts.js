import React from "react";

import { Hearts } from "react-loader-spinner";

export default function SubHeader(props) {
  return (
    <Hearts
      height="80"
      width="200"
      color="#a461fb"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      sx={{ p: 100 }}
    />
  );
}
