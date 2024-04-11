// styles
import "./App.css";

// dependencies
import axios from "axios";

// router
import { Routes, Route } from "react-router-dom";

// components
// page components
import HomePage from "./components/pageComponents/HomePage/HomePage";
import ChatPage from "./components/pageComponents/ChatPage/ChatPage";
// general components

// hooks

// component function
function App() {
  // variables

  // functions

  return (
    <div className="AppContainer">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
