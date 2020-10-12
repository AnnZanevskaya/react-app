import {combineReducers} from "redux";

import {moviesReducer} from "./movies-reducer";
import {appReducer} from "./app-reducer";

export const rootReducer = combineReducers({
    movies: moviesReducer,
    app: appReducer
});
