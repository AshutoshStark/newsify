import { configureStore } from "@reduxjs/toolkit";
import ImageReducer from "../slice/ImageCall";

export const Store = configureStore({
    reducer:{
        ImageCall:ImageReducer,
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch