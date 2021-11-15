import React from "react";
import Chip from '@mui/material/Chip';
import "./Message.css";

export const Message = ({ message }) => {
    return <div>
        {message.map(mes => (
            <div key={mes.id}>
                <Chip label={mes.text} variant={mes.color} />
                {/* <div key={mes.id}>{mes.author}: {mes.text}</div> */}
            </div>
        ))}
    </div>
}