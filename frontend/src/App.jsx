import { Routes, Route, BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import SkillGap from "./pages/SkillGap";
import Roadmap from "./pages/Roadmap";
import Projects from "./pages/Projects";
import Interview from "./pages/Interview";
import Chat from "./pages/Chat";


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/resume" element={<Resume />} />

        <Route path="/skill-gap" element={<SkillGap />} />

        <Route path="/roadmap" element={<Roadmap />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/interview" element={<Interview />} />

        <Route path="/chat" element={<Chat />} />

      </Routes>

    </BrowserRouter>

  );

}


export default App;