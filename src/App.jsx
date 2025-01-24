import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Footer from "./components/footer/footer.component";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
