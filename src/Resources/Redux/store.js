// import { useReducer } from "react";
import { createStore } from "redux";
import { userReducer } from "./reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
    key : 'USER',
    storage : AsyncStorage
}

const PersistReducer = persistReducer(persistConfig,userReducer)

const store = configureStore({
    reducer : PersistReducer,
    middleware : getdefaultMiddleware => getdefaultMiddleware({
        immutableCheck : false,
        serializableCheck : false,
    })
})

let persistor = persistStore(store)

export  {store,persistor};

// const store = createStore(userReducer)

// export default store
