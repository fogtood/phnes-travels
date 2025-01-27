import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";

const Navigation = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Navigation;
