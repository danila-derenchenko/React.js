import { useEffect, useRef, useState } from "react";
import { Message } from "./components/Message/Message";
import "./App.css";
import Button from '@mui/material/Button';
import { ChatList } from "./components/chatList/ChatList.jsx";

function App() {
  const [listChats] = useState([{ chat_name: "Бот 1", chat_id: Math.random() }, { chat_name: "Бот 2", chat_id: Math.random() }, { chat_name: "Бот 3", chat_id: Math.random() }]);
  const input = useRef();
  const [messageList, setMessages] = useState([]);
  const AUTHOR = "Человек";
  const BOT = "Бот";
  const colorBot = "";
  const colorPeople = "outlined";

  const sendForm = event => {
    event.preventDefault();
    sendMessage(
      {
        text: input.current.value,
        author: AUTHOR,
        id: Math.random(),
        color: colorPeople
      }
    );
    input.current.value = "";
    input.current.focus();
  };

  const sendMessage = newMessage => {
    setMessages([...messageList, newMessage]);
  }

  useEffect(() => {
    setTimeout(() => {
      if (messageList.length > 0) {
        if (messageList[messageList.length - 1].author === AUTHOR) {

          setMessages([...messageList, { text: "Привет, я робот", author: BOT, id: Math.random(), color: colorBot }]);
        }
      }
    }, 1500);
  }, [messageList]);

  return (
    <div className="App">
      <div className="content">
        <div className="chatList">
          <ChatList list={listChats} />
        </div>
        <div className="chat">
          <div>Бот 1</div>
          <Message message={messageList} className="content" />
        </div>
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

export default App;