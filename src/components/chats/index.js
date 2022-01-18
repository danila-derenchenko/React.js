import { useCallback, useEffect, useRef, useState } from "react";
import { Message } from "../Message/Message.js";
import "./index.css";
import Button from '@mui/material/Button';
import { ChatList } from "../chatList/ChatList.js";
import { ManagingChats } from "../managingChats/index"
import { Navigate, useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { chats_name } from "../../store/chats/action.js";
import { chats_add } from "../../store/chats/action.js";
import { send_message } from "../../store/messages/action.js";
import { chats_delete } from "../../store/chats/action.js";
import { AUTHORS } from "../../utils/index.js";
import { stateChats, stateMessages } from "../../store/chats/selectors.js";

export function Chats() {
    const [id, setId] = useState(14);
    const { chatId } = useParams();
    const listChats = useSelector(stateChats);
    const input = useRef();
    const [name, setName] = useState();
    const messageList = useSelector(stateMessages);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const colorBot = AUTHORS.colorBot;
    const colorPeople = AUTHORS.colorPeople;

    useEffect(() => { // перенести в Redux
        if (chatId != undefined) {
            for (let i of listChats) {
                if (i.id == chatId) {
                    setName(i.chat_name);
                    break;
                }
            }
        }
        else {
            setName("");
        }

    }, [chatId, listChats]);

    const renameChat = (event) => {
        const newName = prompt("Введите новое имя для чата ");
        dispatch(chats_name(newName, event.target.attributes.chat.value));
        alert("Название чата изменено на " + newName);
        setName(newName);
        navigate(`/chats/${chatId}`);
    }

    const addChat = (chat) => {
        chat.id = id;
        setId(id + 1);
        console.log(id);
        dispatch(chats_add(chat));
        dispatch(send_message({
            text: "Привет",
            author: AUTHORS.user,
            id: Math.random(),
            color: ""
        }, chat.id))
    };

    const deleteChat = (event) => {
        dispatch(chats_delete(event.target.attributes.chat.value))
        if (chatId == event.target.attributes.chat.value) {
            navigate("/chats");
        }
        else {
            navigate(`/chats/${chatId}`);
        }
    }

    const sendForm = event => {
        event.preventDefault();
        sendMessage(
            {
                text: input.current.value,
                author: AUTHORS.user,
                id: Math.random(),
                color: colorPeople
            }
        );
        input.current.value = "";
    };

    const sendMessage = useCallback((newMessage) => {
        if (chatId === undefined) {
            alert("Выберите чат для отправки сообщения");
        }
        else {
            dispatch(send_message(newMessage, Number(chatId)));
            navigate(`/chats/${chatId}`);
        }
    }, [chatId])

    if (chatId != undefined) {
        if (!messageList[chatId]) {
            return <Navigate replace to="/chats" />
        }
    }

    return (
        <div className="App">
            <div className="content">
                <div className="chatList">
                    <ChatList renameChat={renameChat} deleteChat={deleteChat} />
                </div>
                <div className="chat">
                    <div className="chatName">{name}</div>
                    <Message message={messageList[chatId]} className="content" />
                </div>
            </div>
            <div className="managing">
                <ManagingChats addChat={addChat} />
            </div>
            <div className="messages">
                <div>Введите сообщение:</div>
                <form action="#" onSubmit={sendForm}>
                    <input type="text" ref={input} placeholder="Сообщение" id="message" />
                    <br />
                    <Button type="submit">Отправить сообщение</Button>
                </form>
            </div>
        </div>
    );
}

export default Chats;