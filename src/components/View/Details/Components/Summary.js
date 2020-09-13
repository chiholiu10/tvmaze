import React from 'react';

export const Summary = ({ summaryText }) => {
    console.log(summaryText)
    const summaryMarkup = () => {
        return { __html: summaryText };
    }
    return (
        <article>
            <div dangerouslySetInnerHTML={ summaryMarkup() } />
        </article>
    )
}


     