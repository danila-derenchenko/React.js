import React from "react";
import { NavLink } from "react-router-dom";

export const ChatItem = ({ chat, renameChat, deleteChat }) => {
    return (
        <li className="list_li" key={chat.id}>
            <NavLink className="nav" style={({ isActive }) => ({ color: isActive ? "black" : "blue", textDecoration: "none" })} to={`/chats/${chat.id}`} >
                {chat.chat_name}
            </NavLink>
            <br />
            <button chat={chat.id} onClick={renameChat}>Переименовать</button>
            <button chat={chat.id} onClick={deleteChat}>Удалить</button>
        </li>
    )
}

export default ChatItem;