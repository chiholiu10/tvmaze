import React from 'react';
import SearchInput from '../View/Catalog/SearchInput';
import SearchResult from '../View/Catalog/SearchResult/SearchResult';

export const CatalogPage = () => {
    return (
        <div>
            <SearchInput/>
            <SearchResult/>
        </div>
    )
}