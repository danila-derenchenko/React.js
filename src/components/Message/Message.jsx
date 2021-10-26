import React from "react";
import "./Message.css"

export const Message = ({ message, onMessageClick }) => {
    // const message = props.message;
    // const { message } = props;

    return (
        <h3 className="message" onClick={onMessageClick}>
            {message}
        </h3>
    );
};