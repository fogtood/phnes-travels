import { NavLink } from "react-router-dom";
import brand from "@/assets/images/brand.png";

const Brand = () => {
  return (
    <NavLink to="/">
      <img src={brand} alt="brand" />
    </NavLink>
  );
};

export default Brand;
