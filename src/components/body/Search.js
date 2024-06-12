import React, { useState } from "react";

const SearchBar = (props) => {
    const [searchTxt, setSearchTxt] = useState('');
    const handleSearchClick = (e) => {
        e.preventDefault();
        props.onChildClick(searchTxt);
        setSearchTxt('');
    }
    return (
        <>
        <input type="search" placeholder="Enter your values" value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)}/>
        <button onClick={handleSearchClick}>Search</button>
        </>
    );
}

export default SearchBar;