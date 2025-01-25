import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import Brand from "../brand/brand.component";

const navbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Solutions",
    subLinks: [
      {
        name: "International Admission Optimization & Data Integration and Security",
        link: "/international-admission-optimization",
      },
      {
        name: "F-1 Visa Preparations",
        link: "/visa-preparations",
      },
    ],
  },
  {
    name: "Company",
    subLinks: [
      {
        name: "About us",
        link: "/about-us",
      },
      {
        name: "Contact us",
        link: "/contact-us",
      },
    ],
  },
  {
    name: "Resources",
    subLinks: [
      {
        name: "Industry Insights & News",
        link: "/industry-insights-news",
      },
      {
        name: "Privacy Policy & Terms and Conditions",
        link: "/privacy-policy-terms-and-conditions",
      },
    ],
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center justify-between px-3 pt-4 text-white sm:px-6">
      <Brand />
      <NavLinks toggleMobileMenu={toggleMobileMenu} />
      {isMobileMenuOpen && (
        <MobileSidebar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}
    </div>
  );
};

const NavLinks = ({ toggleMobileMenu }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const dropdownRef = useRef(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <button className="cursor-pointer md:hidden" onClick={toggleMobileMenu}>
        <Menu />
      </button>

      <div className="hidden items-center gap-8 md:flex" ref={dropdownRef}>
        {navbarLinks.map((navbarLink, idx) =>
          navbarLink.subLinks ? (
            <Dropdown
              key={idx}
              idx={idx}
              name={navbarLink.name}
              subLinks={navbarLink.subLinks}
              openIndex={openIndex}
              handleToggle={handleToggle}
            />
          ) : (
            <NavLink key={idx} to={navbarLink.link}>
              {navbarLink.name}
            </NavLink>
          ),
        )}
      </div>
    </>
  );
};

const Dropdown = ({ idx, name, subLinks, openIndex, handleToggle }) => {
  return (
    <div className="relative">
      <button
        type="button"
        className="flex cursor-pointer items-center gap-1"
        onClick={() => handleToggle(idx)}
      >
        {name}
        <ChevronDown
          className={`transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full z-50 mt-2 w-64 transform space-y-4 bg-black/50 p-3 text-sm transition-all duration-300 ease-in-out ${openIndex === idx ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}`}
        style={{ right: idx === navbarLinks.length - 1 ? "0" : "auto" }}
      >
        {subLinks.map((link) => (
          <Link to={link.link} key={link.link} className="block">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

const MobileSidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
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
        } flex h-full w-64 flex-col bg-black shadow-lg transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <Brand />
        </div>
        <div className="flex flex-col gap-4 p-4">
          {navbarLinks.map((navbarLink, idx) =>
            navbarLink.subLinks ? (
              <MobileDropdown
                key={idx}
                name={navbarLink.name}
                subLinks={navbarLink.subLinks}
              />
            ) : (
              <NavLink key={idx} to={navbarLink.link}>
                {navbarLink.name}
              </NavLink>
            ),
          )}
        </div>
      </div>
    </>
  );
};

const MobileDropdown = ({ name, subLinks }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        {name}
        <ChevronDown
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`transition-max-height overflow-hidden duration-300 ease-in-out ${open ? "max-h-screen" : "max-h-0"}`}
      >
        <div className="mt-2 flex flex-col gap-2 pl-2 text-sm">
          {subLinks.map((link) => (
            <Link to={link.link} key={link.link}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
