import {
    legacy_createStore,
    applyMiddleware,
    compose,
  } from "redux";
  import { persistStore, persistReducer } from "redux-persist";
  import { reducer } from "./reducer";
  import storage from "redux-persist/lib/storage";
  import thunk from "redux-thunk";
  
  const persistConfig = {
    key: "root", // key for the storage
    storage,
  };
  
  const persistedReducer = persistReducer(persistConfig, reducer);
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  export const store = legacy_createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(thunk))
  );
  export const persistor = persistStore(store);