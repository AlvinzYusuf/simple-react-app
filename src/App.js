import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
