import { useState } from "react";
import "./App.css";
import { Delivery } from "./Delivery";

export const App = () => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });

  const update = (axis, negative = false) => {
    setCoords({
      ...coords,
      [axis]: coords[axis] + (negative ? -1 : 1),
    });
  };

  return <Delivery />;
};
