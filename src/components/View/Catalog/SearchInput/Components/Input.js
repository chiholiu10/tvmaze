import React from 'react';
import PropTypes from "prop-types";

export const Input = ({ inputRef }) => {
	return (
		<input className="search-input"
			ref={inputRef}
			placeholder='Search catalog'
			aria-label='search-input' 
		/>
	);
};

Input.propTypes = {
	inputRef: PropTypes.any
};


