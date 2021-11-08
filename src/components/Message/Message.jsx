import React from "react";
import "./Message.css"

export const Message = ({ message }) => {
    return <div>
        {message.map(mes => (
            <div key={mes.id}>{mes.author}: {mes.text}</div>
        ))}
    </div>
}