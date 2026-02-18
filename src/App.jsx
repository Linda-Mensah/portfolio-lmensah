import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ScrollToHash from "./components/ScrollToHash";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/Hompage";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="min-h-screen bg-[#121816] text-white">
        <ScrollToHash />
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
