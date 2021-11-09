import { useCallback, useEffect, useRef, useState } from "react";
import { Message } from "./components/Message/Message";
import "./App.css";
import Button from '@mui/material/Button';

function App() {
  const input = useRef();
  // const [text, setText] = useState("i am a prop");
  const [messageList, setMessages] = useState([]);
  // const [messageBot, setMessageBot] = useState([]);
  /* const handleClick = () => {
    alert("click");
    setText("123" + Math.random());
    При раскомментировании добавить Message onMessageClick={handleClick}
  }; */

  const sendForm = event => {
    event.preventDefault();
    sendMessage(
      {
        text: input.current.value,
        author: "Человек"
      }
    );
    input.current.value = "";
    console.log(messageList);
    input.current.focus();
  };

  const sendMessage = useCallback((newMessage) => {
    setMessages([...messageList, newMessage]);
  }, [messageList]);

  useEffect(() => {
    if (messageList.length > 0) {
      if (messageList[messageList.length - 1].author == "Человек") {
        setTimeout(() => {
          setMessages([...messageList, { text: "Привет, я робот", author: "Бот" }]);
        }, 1500);
      }
    }
  }, [messageList])

  return (
    <div className="App">
      <header>
        <h1>Бот 1</h1>
      </header>
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
  );
}

export default App;