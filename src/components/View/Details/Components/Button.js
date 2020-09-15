import React from "react";
import PropTypes from "prop-types";

export const Button = ({ clickPage }) => {
	return (
		<button onClick={clickPage} className="button button-detail fonts">
			Back to Catalog
		</button>
	);
};

Button.propTypes = {
	clickPage: PropTypes.func
};
