import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import Brand from "../brand/brand.component";

const navbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About us",
    link: "/about-us",
  },
  {
    name: "Contact us",
    link: "/contact-us",
  },
  {
    name: "Resources",
    link: "/resources",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`flex items-center justify-between px-3 pt-4 ${isHome ? "text-white" : "border-b border-[#3030304D] bg-white"} sm:px-6`}
    >
      <Brand />
      <NavLinks toggleMobileMenu={toggleMobileMenu} />
      <MobileSidebar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </div>
  );
};

const NavLinks = ({ toggleMobileMenu }) => {
  return (
    <>
      {/* Mobile Menu Button */}
      <button className="cursor-pointer md:hidden" onClick={toggleMobileMenu}>
        <Menu />
      </button>

      <div className="hidden items-center gap-8 md:flex">
        {navbarLinks.map((navbarLink, idx) => (
          <NavLink
            key={idx}
            to={navbarLink.link}
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
          >
            {navbarLink.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};

const MobileSidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className={`fixed inset-0 z-50 bg-black transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed inset-0 z-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } flex h-full w-64 flex-col bg-black shadow-lg transition-transform duration-300 ease-in-out ${!isHome && "text-white"}`}
      >
        <div className="p-4">
          <Brand />
        </div>
        <div className="flex flex-col gap-6 p-4">
          {navbarLinks.map((navbarLink, idx) => (
            <NavLink
              key={idx}
              to={navbarLink.link}
              className={({ isActive }) => (isActive ? "font-semibold" : "")}
            >
              {navbarLink.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
