import React from "react";
import "./ChatList.css"
import { NavLink } from "react-router-dom";

export const ChatList = ({ list }) => {
    return (<div>
        <ul className="list">
            {list.map(chat => (
                <li className="list_li" key={chat.id}zz>
                    <NavLink className="nav" style={({ isActive }) => ({ color: isActive ? "black" : "blue", textDecoration: "none" })} to={`/chats/${chat.id}`} >
                        {chat.chat_name}
                    </NavLink>
                </li>

            ))}
        </ul>
    </div>);
}