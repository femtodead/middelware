import { configureStore } from "@reduxjs/toolkit";
import taskReducers from "../reducers/taskReducers";
import { thunk } from "redux-thunk";
import { middleware } from "../middlewares/middleware";
import reducer, { postsSlice } from "../reducers/newRed2";

const store = configureStore({
    reducer: {
        tasks: reducer
    },
    middleware: (getDufaultMiddleware) => getDufaultMiddleware().concat(thunk , middleware)
}) 

export default store;