import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const SearchApp = () => {
    return (
        <>
            <div className="container">
                <Header title="GitHub Profile Search" />
                <SearchBar />
            </div>
        </>
    );
};

export default SearchApp;