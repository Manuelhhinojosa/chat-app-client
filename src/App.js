import "./App.css";

// router
import { Routes, Route } from "react-router-dom";

// components
// page components
import HomePage from "./components/pageComponents/HomePage/HomePage";
import ChatPage from "./components/pageComponents/ChatPage/ChatPage";
// general components

function App() {
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
