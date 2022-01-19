import { CHATS_NAME } from "./action";
import { CHATS_ADD } from "./action";
import { CHATS_DELETE } from "./action";

const initualChats = [];

export const chatsReduser = (state = initualChats, action) => {
    switch (action.type) {
        case CHATS_NAME:
            return state.map(chat => {
                if (chat.id == action.chat_id) {
                    chat.chat_name = action.payload;
                    return chat;
                }
                else {
                    return chat;
                }
            })
        case CHATS_ADD:
            return [...state, { chat_name: action.payload.name, id: action.payload.id }];
        case CHATS_DELETE:
            return state.filter((chat) => chat.id != action.payload)
        default:
            return state;
    }
}

// При попытке менять тип state обновлять данные в ChatList