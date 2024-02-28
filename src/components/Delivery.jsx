import { Controls } from "./Controls";
import { Display } from "./Display";
import { Map } from "./Map";
import { useState } from "react";
import styles from "./Delivery.module.css";

export const Delivery = () => {
  const [payload, setPayload] = useState(0);
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });
  const [locations, setLocations] = useState([
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 6, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 9, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 7, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const update = (axis, negative = false) => {
    setCoords({
      ...coords,
      [axis]: coords[axis] + (negative ? -1 : 1),
    });
  };

  return (
    <div className={styles.container}>
      <aside>
        <Controls
          coords={coords}
          update={update}
          setPayload={setPayload}
          setLocations={setLocations}
        />
        <Display
          coords={coords}
          payload={payload}
          setLocations={setLocations}
          setPayload={setPayload}
        />
      </aside>
      <main>
        <Map locations={locations} />
      </main>
    </div>
  );
};
