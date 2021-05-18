import React from "react";
import PropTypes from "prop-types";

// -----------------------------------------------------------------------------

const cnBase = "StatusEffectsTable";
const cn = {
  header: `${cnBase}--Header`,
};

const ResistCell = ({ resist }) => {
  const { name = "N/A", url } = resist;
  return (
    <div>
      {url && <img src={url} alt={name} className={cn.image} />}
      <h4 className={cn.text}>{name}</h4>
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
