import React from "react";
import PropTypes from "prop-types";

import "./ResistCell.css";

// -----------------------------------------------------------------------------

const ResistCell = ({ resist }) => {
  const { name = "N/A", url } = resist;
  return (
    <div>
      {url && <img src={url} alt={`${name}-Icon`} />}
      <h4 className="ResistanceName">{name}</h4>
    </div>
  );
};

// -----------------------------------------------------------------------------

ResistCell.propTypes = {
  resist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string,
  }).isRequired,
};

// -----------------------------------------------------------------------------

export default ResistCell;
