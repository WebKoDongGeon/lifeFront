import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { persistStore } from "redux-persist";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Here is the setting
    }),
});

const persistor = persistStore(store);

export {store, persistor};