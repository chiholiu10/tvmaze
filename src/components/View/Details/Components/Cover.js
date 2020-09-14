import React from 'react';
import PropTypes from "prop-types";

export const Cover = ({ image, altText }) => {
	return (
		<figure>
			{image && <img src={image.original} alt={altText}/>}
		</figure>
	);
};

Cover.propTypes = {
	image: PropTypes.any,
	altText: PropTypes.string,
};
