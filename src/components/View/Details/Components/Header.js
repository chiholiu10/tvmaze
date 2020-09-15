import React from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

export const Header = ({ episodeTitle }) => {
	return (
		<header>
			<h1><ReactMarkdown source={episodeTitle}/></h1>
		</header>
	);
};

Header.propTypes = {
	episodeTitle: PropTypes.string
};