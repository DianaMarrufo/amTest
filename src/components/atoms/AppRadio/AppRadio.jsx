import { ErrorMessage, useField } from 'formik';
import './AppRadio.scss'

export const AppRadio = ({ label, ...props } ) => {

    const [ field ] = useField({ ...props, type: 'radio' });

    return (
        <div className='app-radio'>
            <label>
                <input type="radio" { ...field } { ...props } />
                { label }            
            </label>
            <ErrorMessage name={ props.name } component="span" />
        </div>
    )
}