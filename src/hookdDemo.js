import * as React from "react";
import "./App.css";
import HooksDemo2 from "./hookdDemo.1";

const { useState, useEffect, useCallback, useMemo } = React;

function HooksDemo(props) {
  return (
    <div>
      {props.flipped}
      {new Array(10).fill(0).map((item, index) => {
        return <HooksDemo2 />;
      })}
      {/* <HooksDemo2 />
      <HooksDemo2 />
      <HooksDemo2 /> */}
      {/* {useMemo(() => {
        return <HooksDemo2 />;
      }, [])}
      {useMemo(() => {
        return <HooksDemo2 />;
      }, [])}
      {useMemo(() => {
        return <HooksDemo2 />;
      }, [])} */}
    </div>
  );
}
export default HooksDemo;
