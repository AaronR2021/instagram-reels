import React, { Component } from "react";
import "./loader.css";

const Loader = ({ size, color = "rgba(33, 213, 250, 0.91)" }) => {
  return (
    <svg className="loader" width={size * 2} height={size * 2} fill={color}>
      <circle cx="10" cy="10" r="5" />
      <circle cx="20" cy="20" r="5" />
      <circle cx="60" cy="60" r="5" />
      <circle cx="70" cy="70" r="5" />
      <circle cx="40" cy="40.5" r="15" fill={"red"} />
    </svg>
  );
};

export default Loader;
