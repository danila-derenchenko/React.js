import { useEffect, useRef, useState } from "react";
import { Message } from "./components/Message/Message";
import "./App.css";
import Button from '@mui/material/Button';
import { ChatList } from "./components/chatList/ChatList.jsx";

function App() {
  const [listChats] = useState([{ chat_name: "Бот 1", chat_id: Math.random() }, { chat_name: "Бот 2", id: Math.random() }, { chat_name: "Бот 3", id: Math.random() }]);
  const input = useRef();
  const [messageList, setMessages] = useState([]);
  const AUTHOR = "Человек";
  const BOT = "Бот";

  const sendForm = event => {
    event.preventDefault();
    sendMessage(
      {
        text: input.current.value,
        author: "Человек",
        id: Math.random()
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
        if (messageList[messageList.length - 1].author == AUTHOR) {

          setMessages([...messageList, { text: "Привет, я робот", author: BOT, id: Math.random() }]);
        }
      }
    }, 1500);
  }, [messageList]);

  return (
    <div className="App">
      <ChatList list={listChats} />
      <div className="chat">
        <h1>Бот 1</h1>
        <Message message={messageList} className="content" />
        <div className="messages">
          <h1>Введите сообщение:</h1>
          <form action="#" onSubmit={sendForm}>
            <input type="text" ref={input} placeholder="Сообщение" id="message" />
            <br />
            <Button type="submit">Отправить сообщение</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;