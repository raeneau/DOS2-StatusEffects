import React from "react";
import PropTypes from "prop-types";

// -----------------------------------------------------------------------------

const TextWithImage = ({ name, url }) => (
  <div>
    <img src={url} alt="Acid" />
    <span>{name}</span>
  </div>
);

// -----------------------------------------------------------------------------

TextWithImage.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default TextWithImage;
