import { CHATS_NAME } from "../action";
import { CHATS_ADD } from "../action";

/* const initualState = {
    chats: [{ chat_name: "Бот 1", id: 1 }, { chat_name: "Бот 2", id: 5 }, { chat_name: "Бот 3", id: 13 }]
} */

const initualState = [{ chat_name: "Бот 1", id: 1 }, { chat_name: "Бот 2", id: 5 }, { chat_name: "Бот 3", id: 13 }];

export const chatsReduser = (state = initualState, action) => {
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
        default:
            return state;
    }
}



// Старая версия. При попытке менять тип обновлять данные в ChatList
/* import { CHATS_NAME } from "../action";

const initualState = {
    chats: [{ chat_name: "Бот 1", id: 1 }, { chat_name: "Бот 2", id: 5 }, { chat_name: "Бот 3", id: 13 }]
}

export const chatsReduser = (state = initualState, action) => {
    switch (action.type) {
        case CHATS_NAME:
            for (let i = 0; i < initualState.chats.length; i++) {
                if (initualState.chats[i].id == action.chat_id) {
                    let newList = initualState.chats;
                    newList[i].chat_name = action.payload;
                    console.log(newList);
                    return {
                        ...state,
                        chats: newList,
                    }
                }
            }
        default:
            return state;
    }
} */