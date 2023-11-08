import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"
import menuReducer from "./menuSlice"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        menu: menuReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
