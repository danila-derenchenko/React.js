import { useCallback, useEffect, useRef, useState } from "react";
import { Message } from "../Message/Message.js";
import "./index.css";
import Button from '@mui/material/Button';
import { ChatList } from "../chatList/ChatList.js";
import { ManagingChats } from "../managingChats/index"
import { Navigate, useNavigate, useParams } from "react-router";

const initialMessages = {
    1: [
        {
            text: "Привет, рад видеть тебя в чате",
            author: "Бот",
            id: Math.random(),
            color: ""
        }
    ],
    5: [
        {
            text: "Добро пожаловать во второй чат!",
            author: "Бот",
            id: Math.random(),
            color: ""
        }
    ],
    13: [
        {
            text: "Привет, ты в третьем чате!",
            author: "Бот",
            id: Math.random(),
            color: ""
        },
    ],
}

export function Chats() {
    const [id, setId] = useState(14);
    const [name, setName] = useState();
    const { chatId } = useParams();
    const [listChats, setListChats] = useState([{ chat_name: "Бот 1", id: 1 }, { chat_name: "Бот 2", id: 5 }, { chat_name: "Бот 3", id: 13 }]);
    const input = useRef();
    const [messageList, setMessages] = useState(initialMessages);
    const navigate = useNavigate();
    const AUTHOR = {
        user: "Человек",
        bot: "Бот"
    };
    const colorBot = "";
    const colorPeople = "outlined";

    useEffect(() => {
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

    }, [chatId]);

    const addChat = (chat) => {
        chat.id = id;
        setId(id + 1);
        console.log(id);
        setMessages((prevMessages) => ({
            ...prevMessages, [chat.id]: [{
                text: "Привет, рад видеть тебя в чате",
                author: "Бот",
                id: Math.random(),
                color: ""
            }]
        }));
        setListChats((prevChats) => ([...prevChats, chat]));
        console.log(chat);
    };

    const deleteChat = () => {
        for (let i = 0; i < listChats.length; i++) {
            if (chatId == listChats[i].id) {
                let a = listChats;
                a.splice(i, 1);
                setListChats(() => (a));
                navigate("/chats");
            }
        }
    };

    const sendForm = event => {
        event.preventDefault();
        sendMessage(
            {
                text: input.current.value,
                author: AUTHOR.user,
                id: Math.random(),
                color: colorPeople
            }
        );
        input.current.value = "";
    };

    const sendMessage = useCallback((newMessage) => {
        setMessages((prevMessages) => ({ ...prevMessages, [chatId]: [...prevMessages[chatId], newMessage] }));
    }, [chatId])

    useEffect(() => {
        setTimeout(() => {
            if (messageList[chatId]?.length > 0) {
                if (messageList[chatId][messageList[chatId]?.length - 1].author !== AUTHOR.bot) {
                    sendMessage({
                        text: "Привет, я робот",
                        author: AUTHOR.bot,
                        id: Math.random(),
                        color: colorBot
                    })
                }
            }
        }, 1500);
    }, [messageList]);

    if (chatId != undefined) {
        if (!messageList[chatId]) {
            return <Navigate replace to="/chats" />
        }
    }

    return (
        <div className="App">
            <div className="content">
                <div className="chatList">
                    <ChatList list={listChats} />
                </div>
                <div className="chat">
                    <div className="chatName">{name}</div>
                    <Message message={messageList[chatId]} className="content" />
                </div>
            </div>
            <div className="managing">
                <ManagingChats addChat={addChat} deleteChat={deleteChat} />
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