import "./form-input.styles.scss"

const FormInput = ({ label, ...otherProps }) => {
   let labelElement = label.toLowerCase().split(" ").join("-")

   return (
      <div className="group">
         <input id={labelElement} className="form-input" {...otherProps} />
         {label && (
            <label
               className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}
               htmlFor={labelElement}
            >
               {label}
            </label>
         )}
      </div>
   )
}

export default FormInput
