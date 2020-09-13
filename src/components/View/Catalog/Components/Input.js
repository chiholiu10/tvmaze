import React from 'react';

export const Input = ({ inputRef }) => {
    return (
        <input 
            ref={inputRef}
            placeholder='Search catalog'
            aria-label='search-input' 
        />
    )
}


