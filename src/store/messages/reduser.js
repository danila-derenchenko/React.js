import { SEND_MESSAGE } from "./action";

const initualMessages = {};

export const messageReduser = (state = initualMessages, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (state[action.payload.chat] != undefined) {
                const messages = state[action.payload.chat];
                messages.push(action.payload.message);
                return { ...state, [action.payload.chat]: messages }
            }
            else {
                return { ...state, [action.payload.chat]: [] }
            }
        default:
            return state;
    }
}