import React from "react";
import PropTypes from "prop-types";

import "./TableRow.css";

// -----------------------------------------------------------------------------

const cnBase = "TableRow";
const cn = {
  text: `${cnBase}--text`,
  image: `${cnBase}--image`,
};

const TableRow = ({ icon, statusName, effect, resist, cure }) => (
  <tr>
    <td>
      <img src={icon} alt={statusName} className={cn.image} />
      <h4 className={cn.text}>{statusName}</h4>
    </td>
    <td>{effect}</td>
    <td>{resist}</td>
    <td>{cure}</td>
  </tr>
);

// -----------------------------------------------------------------------------

TableRow.propTypes = {
  icon: PropTypes.string.isRequired,
  statusName: PropTypes.string.isRequired,
  effect: PropTypes.string,
  resist: PropTypes.string,
  cure: PropTypes.string,
};

TableRow.defaultProps = {
  effect: null,
  resist: null,
  cure: null,
};

export default TableRow;
