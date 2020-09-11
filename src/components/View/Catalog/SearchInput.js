import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getData } from '../../../actions/index';

export const SearchInput = () => {
    const dispatch = useDispatch();
    let input;

    const getInputValue = (value) => {
        let url = `http://api.tvmaze.com/singlesearch/shows?q=${value}`;
        passAPI(url);
    }
    
    const passAPI = (getUrl) => {
        console.log(getUrl)
        axios(getUrl)
            .then(response => {
                console.log(response)
                dispatch(getData(response))
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='container'>
            <h1>Keyword</h1>
            <form 
                onSubmit={e => {
                e.preventDefault()
                if(!input.value.trim()) return;

                getInputValue(input.value);
            }}>

                <input 
                    ref={node => (input = node)}
                    placeholder='Search catalog'
                    aria-label='search-input' 
                />
                <button type='submit'>
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchInput;