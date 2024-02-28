import { useState } from "react";

export const Display = ({
  coords: { x, y },
  payload,
  setPayload,
  setLocations,
}) => {
  const drop = () => {
    setLocations((locations) => {
      const above = locations.slice(0, y);
      const row = locations[y];
      const below = locations.slice(y + 1);
      const left = row.slice(0, x);
      const amount = row[x];
      const right = row.slice(x + 1);

      return [...above, [...left, amount + payload, ...right], ...below];
    });

    setPayload(0);
  };

  return (
    <div>
      <h4>position: </h4>
      x: {x}, y: {y}
      <h4>payload:</h4>
      {payload}
      <button onClick={drop}>drop</button>
    </div>
  );
};
