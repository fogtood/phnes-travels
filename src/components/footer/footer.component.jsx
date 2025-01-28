import { Link } from "react-router-dom";
import Brand from "../brand/brand.component";

const Footer = () => {
  return (
    <footer className="bg-[#133837] text-white/80">
      <div className="mx-auto grid max-w-[90%] gap-y-5 py-16 md:grid-cols-3">
        <div className="flex-1 shrink-0">
          <Brand />
        </div>
        <div className="col-span-1 grid gap-10 text-sm text-white sm:grid-cols-2 md:col-span-2 lg:grid-cols-3">
          <div>
            <h2 className="mb-6 text-lg font-bold sm:text-xl">Company</h2>
            <ul className="space-y-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About us</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-bold sm:text-xl">Solutions</h2>
            <ul className="space-y-5">
              <li>
                <Link to="/resources">Market Entry and Scale</Link>
              </li>
              <li>
                <Link to="/resources">
                  International Admissions Optimization
                </Link>
              </li>
              <li>
                <Link to="/resources">F-1 Visa Preparation</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 className="mb-6 text-lg font-bold sm:text-xl">Resources</h2>
            <ul className="space-y-5">
              <li>
                <Link to="/policies">Terms Conditions</Link>
              </li>
              <li>
                <Link to="/policies">Privacy and Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
