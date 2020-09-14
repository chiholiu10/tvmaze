import React from 'react';
import SearchResult from '../View/Catalog/SearchResult/SearchResult';
import { SearchInput } from '../View/Catalog/SearchInput/SearchInput';

export const CatalogPage = () => {
	return (
		<div>
			<SearchInput/>
			<SearchResult/>
		</div>
	);
};