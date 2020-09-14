import React from 'react';
import PropTypes from "prop-types";  

export const Summary = ({ summaryText }) => {
	const summaryMarkup = () => {
		return { __html: summaryText}; 
	};

	return (
		<article className="article two-columns">
			<div dangerouslySetInnerHTML={ summaryMarkup() } />
		</article>
	);
};

Summary.propTypes = {
	summaryText: PropTypes.any
};
          

    