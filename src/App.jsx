import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index.jsx";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
      </Routes>
    </Router>
  );
}

export default App;
