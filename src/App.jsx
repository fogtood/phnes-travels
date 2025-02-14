import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.route";
import About from "./routes/about/about.route";
import Resources from "./routes/resources/resources.route";
import Contact from "./routes/contact/contact.route";
import Policies from "./routes/policies/policies.route";
import FloatingIcon from "./components/floating-icon/floating-icon.component";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          {/* Routes with Navbar and Footer by default */}
          <Route element={<Navigation />}>
            <Route path="about-us" element={<About />} />
            <Route path="resources" element={<Resources />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="policies" element={<Policies />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <FloatingIcon />
    </>
  );
};

export default App;
