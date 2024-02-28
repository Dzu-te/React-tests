import { useState } from "react";
import styles from "./Controls.module.css";

export const Controls = ({
  coords: { x, y },
  update,
  setPayload,
  setLocations,
}) => {
  const take = () => {
    setLocations((locations) => {
      const above = locations.slice(0, y);
      const row = locations[y];
      const below = locations.slice(y + 1);
      const left = row.slice(0, x);
      const amount = row[x];
      const right = row.slice(x + 1);
      const newAmount = amount ? amount - 1 : 0;

      return [...above, [...left, newAmount, ...right], ...below];
    });

    setPayload((payload) => payload + 1);
  };

  return (
    <div className={styles.cross}>
      <button onClick={() => update("y", true)}> y-</button>
      <div>
        <button onClick={() => update("x", true)}> x-</button>
        <button onClick={take}>take</button>
        <button onClick={() => update("x")}> x+</button>
      </div>
      <button onClick={() => update("y")}> y+</button>
    </div>
  );
};
