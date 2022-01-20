import { PROFILE_CHECKBOX } from "../chats/action";

const initialState = {
    checkbox: false,
    name: "Нажми на меня",
}

export const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_CHECKBOX:
            return {
                ...state,
                checkbox: !state.checkbox,
            }
        default:
            return state;
    }
}