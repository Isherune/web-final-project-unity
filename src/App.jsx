import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Lecturers from "./pages/Lecturers";
import Academic from "./pages/Academic";
import Organizations from "./pages/Organizations";
import Curriculum from "./pages/Curriculum";
import Facilities from "./pages/Facilities";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/lecturers" element={<Lecturers />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/facilities" element={<Facilities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;