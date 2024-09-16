import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rememberEnhancer, rememberReducer } from "redux-remember";

const rememberedReducers = [
    ""
];

const rootReducer = combineReducers({});

const rememberedReducer = rememberReducer(rootReducer);

export const store = configureStore({
    reducer: rememberedReducer,
    enhancers: (getDefaultEnhancer) =>
        getDefaultEnhancer().concat(
            rememberEnhancer(window.localStorage, rememberedReducers)
        ),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];