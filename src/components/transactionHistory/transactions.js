import PropTypes from 'prop-types';
import css from './transactions.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr className={css.headRow}>
          <th className={css.tableTh}>Type</th>
          <th className={css.tableTh}>Amount</th>
          <th className={css.tableTh}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.tableTbody}>
            <td className={css.tableTd}>{type}</td>
            <td className={css.tableTd}>{amount}</td>
            <td className={css.tableTd}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
