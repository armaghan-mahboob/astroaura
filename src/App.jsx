import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Chat from "./components/Chat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
