import { combineReducers } from "redux";
import GitHubProfile from "./gitHubProfile";

export default combineReducers({
    github: GitHubProfile,
});