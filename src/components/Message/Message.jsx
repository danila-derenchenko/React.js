import React from "react";
import "./Message.css"

export const Message = ({ message, bot }) => {
    return <div>
        {message.map((mes) => (
            <div>{mes.author}: {mes.text}</div>
        ))}
    </div>
}