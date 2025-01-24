const BUTTON_STYLES = {
  primary: "bg-[#276968] text-white p-4 rounded-md cursor-pointer",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={BUTTON_STYLES[buttonType]} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
