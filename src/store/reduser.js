import { combineReducers } from "redux";
import { profileReduser } from "./profile/reduser";
import { chatsReduser } from "./chats/reduser";

export const rootReduser = combineReducers({
    profile: profileReduser,
    chats: chatsReduser,
})