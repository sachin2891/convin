import React from "react";

const Iframe = ({ source }) => {
  return (
    <div>
      <iframe src={source} width="560" height="315" allowFullScreen></iframe>
    </div>
  );
};

export default Iframe;
