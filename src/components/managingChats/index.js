import React, { useRef } from "react";
import "./managingChats.css";

export const ManagingChats = ({ addChat, deleteChat }) => {
    const form = useRef();
    const input = useRef();
    const createChat = (event) => {
        event.preventDefault();
        addChat({
            chat_name: input.current.value,
            id: 0
        });
        input.current.value = "";
    };
    const ButtonDeleteChat = () => {
        deleteChat();
    }
    const click = () => {
        form.current.classList.toggle("form")
    }
    return <div className="managing">
        <button className="button" onClick={ButtonDeleteChat}>Удалить активный чат</button>
        <button className="button" onClick={click} type="click">Добавить чат</button>
        <form className="form" ref={form} onSubmit={createChat}>
            <input ref={input} placeholder="Введите название чата" />
            <br />
            <button type="submit">Создать чат</button>
        </form>
    </div>
};

export default ManagingChats;