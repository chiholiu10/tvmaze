import React from 'react';
import ReactMarkdown from 'react-markdown';

export const Title = ({ episodeTitle}) => {
    return (
        <header>
            <h1><ReactMarkdown source={episodeTitle}/></h1>
        </header>
    )
}