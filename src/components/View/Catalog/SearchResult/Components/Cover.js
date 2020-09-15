import React from "react";
import PropTypes from "prop-types";

export const Cover = ({ image, altText }) => {
	return (
		<figure className="figure two-columns">
			{image && <img src={image.medium} alt={altText} className="image-align"/>}
		</figure>
	);
};

Cover.propTypes = {
	image: PropTypes.any,
	altText: PropTypes.string
};

          