import React from "react";
import PropTypes from "prop-types";

// -----------------------------------------------------------------------------

const TextWithImage = ({ name, url }) => (
  <div>
    <img src={url} alt={name} className="Icon" />
    <span>{name}</span>
  </div>
);

// -----------------------------------------------------------------------------

TextWithImage.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default TextWithImage;
