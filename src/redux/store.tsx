import {persistStore, persistReducer, PersistPartial} from "redux-persist";
import storage from "redux-persist/lib/storage"
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice"

const persistConfig= {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, menuReducer);



const store = configureStore({
        reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type RootStateWithPersist = RootState & PersistPartial;
export { store, persistStore };

export type AppDispatch = typeof store.dispatch;
export default store;


