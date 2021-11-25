import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchApp from "../pages/SearchApp";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<SearchApp />} />
        </Routes>
    );
};

export default Router;