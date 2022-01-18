import { SEND_MESSAGE } from "./action";

const initualMessages = {};

export const messageReduser = (state = initualMessages, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (state[action.payload.chat] != undefined) {
                state[action.payload.chat].push(action.payload.message);
            }
            else {
                state[action.payload.chat] = []
                state[action.payload.chat].push(action.payload.message);
            }
            return state;
        default:
            return state;
    }
}