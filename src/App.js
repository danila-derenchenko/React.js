import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Chats } from "./components/chats";
import { Home } from "./components/home";
import { Profile } from "./components/Profile"
import { Provider } from "react-redux";
import { ChatList } from "./components/chatList/ChatList";
import { store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/chats">Chats</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chats" element={<Chats />}>
              <Route index element={<ChatList />} />
              <Route path=":chatId" element={<Chats />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>);
};

export default App;