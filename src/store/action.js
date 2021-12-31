export const PROFILE_CHECKBOX = "PROFILE__CHANGE_VALUE";
export const CHATS_NAME = "CHATS__RENAME";
export const CHATS_ADD = "CHATS__ADD";

export const profile_checkbox = {
    type: PROFILE_CHECKBOX,
}

export const chats_name = (name, chatId) => {
    return {
        type: CHATS_NAME,
        payload: name,
        chat_id: chatId,
    }
}

export const chats_add = (chat) => {
    return {
        type: CHATS_ADD,
        payload: {
            name: chat.chat_name,
            id: chat.id
        }
    }
}