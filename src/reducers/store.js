import thunk from "redux-thunk";
import reducerGitHub from "./gitHubProfile"
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        gitHub: reducerGitHub,
    },
    middleware: [thunk],
    devTools: true,
});