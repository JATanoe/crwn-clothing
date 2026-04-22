import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
   google: "google-sign-in",
   inverted: "inverted"
}

const Button = ({ children, buttonType, ...otherProps }) => {
   const getButtonClass = () => {
      if (buttonType) {
         return BUTTON_TYPE_CLASSES[buttonType];
      }
      return "default";
   };

   return <button className={`button-container ${getButtonClass()}`} {...otherProps}>{children}</button>;
}

export default Button