import * as React from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";
import BatchedDemo from "./batchUpdates";
import HooksDemo from "./hookdDemo";
import { DynamicLoader } from "./Loader";

const { useState, useEffect, useCallback, useMemo } = React;

function App() {
  const [DOM, setDom] = useState("classDemo1");
  const [flipped1, set1] = useState(false);
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  useEffect(() => {
    DynamicLoader.readyClassDemo1().then(() => {
      console.log();
      setDom(React.createElement(DynamicLoader.classDemo1.classDemo1));
    });
  }, []);

  return (
    <div>
      {DynamicLoader.classDemo1 && (
        <DynamicLoader.classDemo1.classDemo1></DynamicLoader.classDemo1.classDemo1>
      )}

      {/* <animated.div
        className="c back"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      />
      <animated.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      /> */}
      {/* <span onClick={() => set1(!flipped1)}>11111</span> */}
      {/* {new Array(50).fill(0).map((item, index) => {
        return <HooksDemo flipped={flipped} />;
      })} */}
      {/* {new Array(50).fill(0).map((item, index) => {
        return useMemo(() => {
          return <HooksDemo flipped={flipped} />;
        }, [flipped]);
      })} */}
      {/* {useCallback(<HooksDemo flipped={flipped} />, [flipped])} */}
    </div>
  );
}
export default App;
