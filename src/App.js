import { useState } from "react";
import { Message } from "./components/Message/Message";
import "./App.css";

function App() {
  const [text, setText] = useState("i am a prop");
  const [ligougkl, jghdfjhfjk] = useState({ foo: 1 });

  const handleClick = () => {
    alert("click");
    setText("123" + Math.random());
  };

  const sendMessage = () => {
    let u = document.getElementById("message").value;
    setText(u);
  };

  return (
    <div className="App">
      <header>
        <h1>Введите сообщение:</h1>
        <input placeholder="Сообщение" id="message" />
        <button onClick={sendMessage}>Отправить сообщение</button>
        <h1>Ваше отправленное сообщение:</h1>
        <Message message={text} onMessageClick={handleClick} className="content" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
// <img src={logo} className="App-logo" alt="logo" />