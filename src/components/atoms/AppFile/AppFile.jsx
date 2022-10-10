import { ErrorMessage, useField } from 'formik';
import './AppFile.scss'

export const AppFile = ({ label, ...props } ) => {

    const [ field ] = useField({ ...props, type: 'file' });

    return (
        <div className='app-file'>
            <label>
                { label }            
                <input type="file" { ...field } { ...props } />
            </label>
            <ErrorMessage name={ props.name } component="span" />
        </div>
    )
}