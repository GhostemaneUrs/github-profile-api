import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ProfileCard from "../components/ProfileCard";

const SearchApp = () => {
    return (
        <>
            <div className="container">
                <Header title="GitHub Profile Search" />
                <SearchBar />
                <ProfileCard />
            </div>
        </>
    );
};

export default SearchApp;