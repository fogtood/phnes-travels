import { NavLink } from "react-router-dom";
import brand from "@/assets/images/brand.png";

const Brand = () => {
  return (
    <NavLink to="/">
      <img src={brand} alt="brand" className="h-16" />
    </NavLink>
  );
};

export default Brand;
