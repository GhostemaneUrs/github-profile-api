import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailsUserApp from "../pages/DetailsUserApp";
import SearchApp from "../pages/SearchApp";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<SearchApp />} />
            <Route path="/DetailsUserApp" element={<DetailsUserApp />} />
        </Routes>
    );
};

export default Router;