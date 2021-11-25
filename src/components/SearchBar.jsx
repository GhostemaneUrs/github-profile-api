import React from 'react';

const SearchBar = () => {
    return (
        <div className="flex justify-between items-center container-searchbar active">
            <label className="flex-1" for="input">
                <input type="search" name="user-input" id="inputSearch" className="inputSearch" placeholder="Search Github username.." />
            </label>
            <button className="btn-search" id="submit">Search</button>
        </div>
    );
}

export default SearchBar;