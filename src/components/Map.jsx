import styles from "./Map.module.css";

export const Map = ({ locations }) => {
  const locationRows = locations.map((row) =>
    row.map((amount) => amount || "")
  );
  return (
    <table>
      <tbody>
        {locationRows.map((row, r) => (
          <tr key={r}>
            {row.map((value, c) => (
              <td key={c}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
