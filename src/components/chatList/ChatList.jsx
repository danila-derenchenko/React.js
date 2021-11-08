import React from "react";

export const ChatList = ({ list }) => {
    return <div>
        {list.map(chat => (
            <h1 key={chat.chat_id}>{chat.chat_name}</h1>
        ))}
    </div>
}