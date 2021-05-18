import React from "react";
import PropTypes from "prop-types";

import "./TableRow.css";
import TextWithImage from "./TextWithImage";
import ResistCell from "./ResistCell";

import { RESISTANCE } from "../constants";

// -----------------------------------------------------------------------------

const cnBase = "TableRow";
const cn = {
  text: `${cnBase}--text`,
  image: `${cnBase}--image`,
};

const TableRow = ({ icon, statusName, effect, resist, cures }) => (
  <tr>
    <td>
      <img src={icon} alt={statusName} className="Icon" />
      <h4 className={cn.text}>{statusName}</h4>
    </td>
    <td>{effect}</td>
    <td>
      <ResistCell resist={resist} />
    </td>
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
  resist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string,
  }),
  cures: PropTypes.string, // TODO: EDIT
};

TableRow.defaultProps = {
  effect: null,
  resist: RESISTANCE.NONE,
  cures: null,
};

// -----------------------------------------------------------------------------

export default TableRow;
