import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import SearchBar from "../components/SearchBar";

const SearchApp = () => {
    return (
        <>
            <div className="container">
                <HeaderComponent title="GitHub Profile Search" />
                <SearchBar />
            </div>
        </>
    );
};

export default SearchApp;