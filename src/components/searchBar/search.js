import React, { useState } from 'react';

const VideoSearchBar = ({ whenSearchSubmit }) => {
    const [term, setTerm] = useState('');
    const searchBarSubmit = (event) => {
        event.preventDefault();
        whenSearchSubmit(term)
    }
    const onSearchValueChange = (event) => {
        setTerm(event.target.value)
    }
    return (
        <div className="ui segment">
            {/* <form className="ui form" onSubmit={(event) => this.onSearchSubmit(event)}> */}
            <form className="ui form" onSubmit={searchBarSubmit} autoComplete='off'>
                <div className="field">
                    <label>Search Images</label>
                    {/* this will also work as exactly same as below */}
                    {/* <input type="text" placeholder="Search Images" onChange={this.onInputChange} /> */}
                    <input type="text"
                        placeholder="Search Images"
                        value={term}
                        onChange={(e) => onSearchValueChange(e)} />
                </div>
            </form>
        </div>
    )
}

export default VideoSearchBar;