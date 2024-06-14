import React, { useState } from "react";

const SearchBar = (props) => {
    const [searchTxt, setSearchTxt] = useState('');
    const handleSearchClick = (e) => {
        e.preventDefault();
        props.onChildClick(searchTxt);
        setSearchTxt('');
    }
    return (
        <div className="searchBar-container">
        <input type="search" placeholder="Enter your values" value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)}/>
        <button className="mx-2" onClick={handleSearchClick}>Search</button>
        </div>
    );
}

export default SearchBar;