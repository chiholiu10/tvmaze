import React from 'react';
import { connect } from 'react-redux';
import history from '../../../history';
import { Header } from './Components/Header';
import { Cover } from './Components/Cover';
import { Summary } from './Components/Summary';
import { Button } from './Components/Button';

export const Details = ({ episodeData, episodeIndex }) => {
    const contentCheck = episodeData.length;
    const currentEpisode = episodeData[episodeIndex];

    const previousPage = () => {
        history.goBack();
    }

    if(contentCheck === 0) {
        previousPage();
    }
    
    return (
        <section>
            <Header episodeTitle={currentEpisode.name}/> 
            <Cover image={currentEpisode.image}/>
            <Summary summaryText={currentEpisode.summary}/>
            <Button clickPage={() => previousPage()}/>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        episodeData: state.catalogData.episodeList,
        episodeIndex: state.catalogData.currentIndex
    }
}

export default connect(mapStateToProps)(Details);