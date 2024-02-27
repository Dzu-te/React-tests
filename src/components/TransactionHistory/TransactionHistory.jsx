import { TransactionItem } from "./TransactionItem";
import styles from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items = [] }) => {
  return (
    <table>
      <thead>
        <tr className={styles.theadTr}>
          <th className={styles.theadTh}>Type</th>
          <th className={styles.theadTh}>Amount</th>
          <th className={styles.theadTh}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
};
