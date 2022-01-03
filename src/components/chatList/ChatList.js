import React from "react";
import "./ChatList.css"
import ChatItem from "../chatItem";
import { useSelector } from "react-redux";

export const ChatList = ({ renameChat, deleteChat }) => {
    const list = useSelector(state => state.chats.chats);
    return (<div>
        <ul className="list">
            {list.map((chat) => (
                <ChatItem chat={chat} renameChat={renameChat} deleteChat={deleteChat} key={chat.id} />
            ))}
        </ul>
    </div>);
}