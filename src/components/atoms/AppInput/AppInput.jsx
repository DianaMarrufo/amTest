import { ErrorMessage, useField } from "formik"
import { AppLabel } from "../AppLabel"
import './AppInput.scss'

export const AppInput = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div className="app-input">
      <AppLabel htmlFor={props.id || props.name} title={label} />
      <input className="app-input__input" { ...field } { ...props } />
      <ErrorMessage
        name={props.name}
        component="span"
        className="app-input__error"
      />
    </div>
  );
};
