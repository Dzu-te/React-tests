import styles from "./TransactionHistory.module.css";
export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={styles.tbodyTd}>{type}</td>
      <td className={styles.tbodyTd}>{amount}</td>
      <td className={styles.tbodyTd}>{currency}</td>
    </tr>
  );
};
