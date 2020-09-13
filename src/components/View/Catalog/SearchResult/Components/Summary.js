import React from 'react';

export const Summary = ({ summaryText }) => {
    const summaryMarkup = () => {
        return { __html: summaryText} 
    };

    return (
        <div>
            <div dangerouslySetInnerHTML={ summaryMarkup() } />
        </div>
    )
}


          

    