import { CHATS_NAME } from "./action";
import { CHATS_ADD } from "./action";
import { CHATS_DELETE } from "./action";

/* const bgnfodnvoinoivnoi = {
chats: [{ chat_name: "Бот 1", id: 1 }, { chat_name: "Бот 2", id: 5 }, { chat_name: "Бот 3", id: 13 }],
messages: {
    1: [
        {
            text: "Привет, рад видеть тебя в чате",
            author: "Бот",
            id: Math.random(),
            color: ""
        }
    ],
    5: [
        {
            text: "Добро пожаловать во второй чат!",
            author: "Бот",
            id: Math.random(),
            color: ""
        }
    ],
    13: [
        {
            text: "Привет, ты в третьем чате!",
            author: "Бот",
            id: Math.random(),
            color: ""
        },
    ],
}
}; */

const initualChats = [];

export const chatsReduser = (state = initualChats, action) => {
    switch (action.type) {
        case CHATS_NAME:
            for (let i = 0; i < state.length; i++) {
                if (state[i].id == action.chat_id) {
                    state[i].chat_name = action.payload;
                    return state
                }
            }
        case CHATS_ADD:
            state.push({ chat_name: action.payload.name, id: action.payload.id });
            return state
        case CHATS_DELETE:
            for (let i = 0; i < state.length; i++) {
                if (state[i].id == action.payload) {
                    state.splice(i, 1);
                    return state;
                }
            }
        default:
            return state;
    }
}

// При попытке менять тип state обновлять данные в ChatList