import React from "react";
import PropTypes from "prop-types";

// CSS.
import "./TextWithImage.css";

// -----------------------------------------------------------------------------

const TextWithImage = ({ name, url }) => (
  <div className="SkillCell">
    <img src={url} alt={`${name}-Icon`} className="Icon SkillIcon" />
    <span className="SkillName">{name}</span>
  </div>
);

// -----------------------------------------------------------------------------

TextWithImage.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default TextWithImage;
