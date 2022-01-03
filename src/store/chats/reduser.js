import { CHATS_NAME } from "../action";
import { CHATS_ADD } from "../action";
import { CHATS_DELETE } from "../action";
import { SEND_MESSAGE } from "../action";

/* const initualState = {
    chats: [{ chat_name: "Бот 1", id: 1 }, { chat_name: "Бот 2", id: 5 }, { chat_name: "Бот 3", id: 13 }]
} */

const initualState = {
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
};

export const chatsReduser = (state = initualState, action) => {
    switch (action.type) {
        case CHATS_NAME:
            for (let i = 0; i < state.chats.length; i++) {
                if (state.chats[i].id == action.chat_id) {
                    state.chats[i].chat_name = action.payload;
                    return state
                }
            }
        case CHATS_ADD:
            state.chats.push({ chat_name: action.payload.name, id: action.payload.id });
            state.messages[action.payload.id] = [
                {
                    text: "Приветствую тебя в чате!",
                    author: "Бот",
                    id: Math.random(),
                    color: ""
                },
            ];
            console.log(state.messages);
            return state
        case CHATS_DELETE:
            for (let i = 0; i < state.chats.length; i++) {
                if (state.chats[i].id == action.payload) {
                    state.chats.splice(i, 1);
                    return state;
                }
            }
        case SEND_MESSAGE:
            state.messages[action.payload.chat].push(action.payload.message);
            return state;
        default:
            return state;
    }
}

// При попытке менять тип state обновлять данные в ChatList