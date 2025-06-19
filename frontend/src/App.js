import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatForm from "./pages/ChatForm";
import Summary from "./pages/Summary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatForm />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Router>
  );
}

export default App;

