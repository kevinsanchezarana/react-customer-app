import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';


const isRequired = ( value ) => (
    !value && "Este campo es requerido"
)

const MyField = ( { input, meta } ) => (
    <div>
        <input {...input} type="text"></input>
        { meta.error && meta.touched && <span>{meta.error}</span> }
    </div>
)


const CustomerEdit = ( { name, dni, age } ) => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            {/* form>(div>label+Field)*3 */}
            <form action="">
                <div>
                    <label htmlFor="name">Nombre</label>
                    <Field name="name" component={MyField} type="text" validate={isRequired}></Field>
                </div>
                <div>
                    <label htmlFor="dni">DNI</label>
                    <Field name="dni" component={MyField} type="text" validate={isRequired}></Field>
                </div>
                <div>
                    <label htmlFor="age">Edad</label>
                    <Field name="age" component={MyField} type="number" validate={isRequired}></Field>
                </div>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};

//Añadimos las funcionalidades de reactRedux a nuestro componente, ya reduxForm tiene actions creator por defecto
export default setPropsAsInitial( reduxForm( { form: 'EditCustomer' } )(CustomerEdit) );
