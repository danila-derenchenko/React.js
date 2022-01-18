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