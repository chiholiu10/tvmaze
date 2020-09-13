import React from 'react';

export const Cover = ({ image, altText }) => {
    return (
        <figure>
            {image && <img src={image.original} alt={altText}/>}
        </figure>
    )
}