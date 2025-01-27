import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.route";
import About from "./routes/about/about.route";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />

        {/* Routes with Navbar and Footer by default */}
        <Route element={<Navigation />}>
          <Route path="about-us" element={<About />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
