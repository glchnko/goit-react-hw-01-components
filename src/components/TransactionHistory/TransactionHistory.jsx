import PropTypes from "prop-types";
import s from "./transactionHistory.module.css"
import TableRow from './TableRow';

const TransactionHistory = ({items}) => {
    return (
        <table className={s.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(item => (
          <tr key={item.id}>
            <TableRow
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
  </tbody>
</table>
    )
}
 export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    ),
  };

