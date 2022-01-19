import { AUTHORS } from "../../utils";

export const SEND_MESSAGE = "SEND__MESSAGE";

export const send_message = (message, chat) => {
    return {
        type: SEND_MESSAGE,
        payload: {
            message: message,
            chat: chat
        }
    }
}

export const messageMiddlewar = (message, chatId) => (dispatch) => {
    dispatch(send_message(message, chatId));
    setTimeout(() => {
        dispatch(send_message({
            text: "Привет, я робот",
            id: Math.random(),
            author: AUTHORS.bot,
            color: AUTHORS.colorBot
        }, chatId))
    }, 1000)
}