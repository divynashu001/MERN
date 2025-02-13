import Navbar from "./components/Navbar.jsx";
import Create from "./components/Create.jsx";
import Read from "./components/Read.jsx";
import Update from "./components/Update.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
