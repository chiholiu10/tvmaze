import React from "react";
import PropTypes from "prop-types";
import history from "../../../history";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Header } from "./Components/Header";
import { Cover } from "./Components/Cover";
import { Summary } from "./Components/Summary";
import { Button } from "./Components/Button";

export const Details = ({ episodeData, episodeIndex }) => {
	const contentCheck = episodeData.length;
	const currentEpisode = episodeData[episodeIndex];

	const previousPage = () => {
		history.goBack();
	};

	if(currentEpisode === undefined || contentCheck === 0) {
		return (
			<Redirect to="/"/>
		);
	}
    
	return (
		<section>
			<Header episodeTitle={currentEpisode.name}/> 
			<Cover image={currentEpisode.image}/>
			<Summary summaryText={currentEpisode.summary}/>
			<Button clickPage={() => previousPage()}/>
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		episodeData: state.catalogData.episodeList,
		episodeIndex: state.catalogData.currentIndex
	};
};

Details.propTypes = {
	episodeData: PropTypes.any, 
	episodeIndex: PropTypes.number
};

export default connect(mapStateToProps)(Details);