import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import _map from "lodash.map";

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

const TableRow = ({ icon, statusName, effect, resist, cures }) => {
  const cureArray = cures.reduce((accumulator, currentVal) => {
    const { category } = currentVal;
    const currentCat = accumulator[category];

    return {
      ...accumulator,
      [category]: [currentVal, ...(currentCat !== undefined ? currentCat : [])],
    };
  }, {});

  return (
    <tr className={cnBase}>
      <td>
        <img src={icon} alt={statusName} className="Icon" />
        <h4 className={cn.text}>{statusName}</h4>
      </td>
      <td>{effect}</td>
      <td>
        <ResistCell resist={resist} />
      </td>
      <td>
        {_map(
          cureArray, // Loop through skill categories to group them together
          (cureCategory, key) => {
            return (
              <div className={classNames(key.toLowerCase(), "SkillCategory")}>
                {_map(cureCategory, (
                  cure, // Map individual skills to a DOM element
                ) => (
                  <TextWithImage name={cure.name} url={cure.url} />
                ))}
              </div>
            );
          },
        )}
      </td>
    </tr>
  );
};

// -----------------------------------------------------------------------------

TableRow.propTypes = {
  icon: PropTypes.string.isRequired,
  statusName: PropTypes.string.isRequired,
  effect: PropTypes.string,
  resist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string,
  }),
  cures: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

TableRow.defaultProps = {
  effect: null,
  resist: RESISTANCE.NONE,
  cures: [],
};

// -----------------------------------------------------------------------------

export default TableRow;
