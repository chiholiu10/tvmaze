import React from 'react';

export const Cover = ({ image, altText }) => {
    return (
        <div>
            {image && <img src={image.original} alt={altText}/>}
        </div>
    )
}