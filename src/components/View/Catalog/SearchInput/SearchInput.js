import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getData } from '../../../../actions/index';
import { getEpisodeList } from '../../../../actions/index';
import { Button } from './Components/Button';
import { Input } from './Components/Input';
import { Header } from './Components/Header';

export const SearchInput = () => {
	const dispatch = useDispatch();
	let input;

	const getInputValue = (value) => {
		let url = `http://api.tvmaze.com/singlesearch/shows?q=${value}&embed=episodes`;
		tvData(url);
	};

	const episodeListData = (url) => {
		axios(url)
			.then(response => {
				dispatch(getEpisodeList(response.data));
			})
			.catch(error => {
				console.log(error);
			});
	};

	const getId = (id) => {
		let url = `http://api.tvmaze.com/shows/${id}/episodes`;
		episodeListData(url);
	};
    
	const tvData = (getUrl) => {
		axios(getUrl)
			.then(response => {
				dispatch(getData(response));
				getId(response.data.id);
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<section>
			<Header/>
			<form className="form"
				onSubmit={e => {
					e.preventDefault();
					if(!input.value.trim()) return;

					getInputValue(input.value);
				}}>
				<Input inputRef={node => (input = node)}/>
				<Button/>
			</form>
		</section>
	);
};