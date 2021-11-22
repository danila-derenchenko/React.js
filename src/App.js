import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Chats } from "./components/chats";
import { Home } from "./components/home";
import { ChatList } from "./components/chatList/ChatList";

export const App = () => {
  return <BrowserRouter>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/chats">Chats</Link>
      </li>
    </ul>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chats" element={<Chats />}>
        <Route index element={<ChatList />} />
        <Route path=":chatId" element={<Chats />} />
      </Route>
    </Routes>
  </BrowserRouter>
};

export default App;