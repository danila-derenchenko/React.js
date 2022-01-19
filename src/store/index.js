import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReduser } from "./profile/reduser";
import { chatsReduser } from "./chats/reduser";
import thunk from "redux-thunk";
import { messageReduser } from "./messages/reduser";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from 'redux-persist';

const config = {
    key: "localhost",
    storage,
};

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReduser = persistReducer(
    config,
    combineReducers({
        profile: profileReduser,
        chats: chatsReduser,
        messages: messageReduser,
    })
);

export const store = createStore(persistedReduser, composeEnhansers(applyMiddleware(thunk)));

export const persistor = persistStore(store);