import { createStore, combineReducers } from "redux";
import { profileReduser } from "./profile/reduser";
import { chatsReduser } from "./chats/reduser";
import { messageReduser } from "./messages/reduser";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from 'redux-persist';

const config = {
    key: "localhost",
    storage,
};

const persistedReduser = persistReducer(
    config,
    combineReducers({
        profile: profileReduser,
        chats: chatsReduser,
        messages: messageReduser,
    })
);

export const store = createStore(persistedReduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor = persistStore(store);