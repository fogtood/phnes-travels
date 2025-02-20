import { NavLink } from "react-router-dom";
import brand from "@/assets/images/brand.png";

const Brand = () => {
  return (
    <NavLink to="/" className="inline-flex flex-col items-center justify-start">
      <img src={brand} alt="brand" className="h-20" />
      <p className="text-sm">Study and Fly</p>
    </NavLink>
  );
};

export default Brand;
