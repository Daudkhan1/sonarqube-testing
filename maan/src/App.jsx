import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Career from "./pages/Career";
import Services from "./pages/services/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import Teams from "./pages/Teams";
import Clients from "./pages/Clients";
import Blogs from "./pages/Blogs";
import { useEffect } from "react";
import "./App.css";

import AI from "./pages/services/subpages/AI";
import Annotation from "./pages/services/subpages/Annotation";
import Application from "./pages/services/subpages/Application";
import Embedded from "./pages/services/subpages/Embedded";
import Cloud from "./pages/services/subpages/Cloud";
import Simulation from "./pages/services/subpages/Simulation";
import CyberSecurity from "./pages/services/subpages/CyberSecurity";
import Medical from "./pages/services/subpages/Medical";
import Privacy from "./pages/Privacy";

const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTopOnMount />
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/artificial-intelligence" element={<AI />} />
            <Route path="/annotation" element={<Annotation />} />
            <Route path="/application" element={<Application />} />
            <Route path="/embedded" element={<Embedded />} />
            <Route path="/cloud" element={<Cloud />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/cybersecurity" element={<CyberSecurity />} />
            <Route path="/medical" element={<Medical />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
