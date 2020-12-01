import React from "react";
import PropTypes from "prop-types";

import "./TableRow.css";
import TextWithImage from "./TextWithImage";

// -----------------------------------------------------------------------------

const cnBase = "TableRow";
const cn = {
  text: `${cnBase}--text`,
  image: `${cnBase}--image`,
};

const TableRow = ({ icon, statusName, effect, resist, cures }) => (
  <tr>
    <td>
      <img src={icon} alt={statusName} className={cn.image} />
      <h4 className={cn.text}>{statusName}</h4>
    </td>
    <td>{effect}</td>
    <td>{resist}</td>
    <td>
      {cures.map((cure) => (
        <TextWithImage name={cure.name} url={cure.url} />
      ))}
    </td>
  </tr>
);

// -----------------------------------------------------------------------------

TableRow.propTypes = {
  icon: PropTypes.string.isRequired,
  statusName: PropTypes.string.isRequired,
  effect: PropTypes.string,
  resist: PropTypes.string,
  cures: PropTypes.string,
};

TableRow.defaultProps = {
  effect: null,
  resist: null,
  cures: null,
};

export default TableRow;
