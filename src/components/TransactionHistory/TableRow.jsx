
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const TableRow = ({ type, amount, currency }) => {
    return (
    <Fragment>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Fragment>
    )
}

export default TableRow;

TableRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};