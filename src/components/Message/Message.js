import React from "react";
import Chip from '@mui/material/Chip';
import "./Message.css";
export const Message = ({ message }) => {
    if (message != undefined) {
        return (<div>
            {message.map(mes => (
                <div key={mes.id}>
                    <Chip label={mes.text} variant={mes.color} />
                </div>
            ))}
        </div>);
    }
    else {
        return <div></div>;
    }
}