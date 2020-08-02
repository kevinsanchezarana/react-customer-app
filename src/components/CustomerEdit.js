import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';


const isRequired = ( value ) => (
    !value && "Este campo es requerido"
)

const isNumber = ( value ) => (
    isNaN( Number( value ) ) && "Este campo debe se numérico"
)

const MyField = ( { input, meta, type, label, name } ) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={ !type ? "text" : type }></input>
        { meta.error && meta.touched && <span>{meta.error}</span> }
    </div>
)

//Validacines globales
//Prioridad validación especifica y después la global
const validate = values => {

    const error = {};

    if ( !values.dni ){
        error.dni = "El campo DNI es requerido";
    }

    if ( !values.name ){
        error.name = "El campo Nombre es requerido";
    }

    return error;

}

//Se ejecuta primer el parse, despues normalize y cuando te llegan los datos del estado el format
const toNumber = value => value && Number( value );
const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();
const onlyGrow = ( value, previousValue, values ) => value && previousValue && ( value > previousValue ? value : previousValue );

//Es propiedad de react-form: submitting 
//handleSubmit es una funcion que esta en react-form, de ahi que su nombre sea requerido
const CustomerEdit = ( { name, dni, age, handleSubmit, submitting, onBack } ) => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            {/* form>(div>label+Field)*3 */}
            <form action="" onSubmit={handleSubmit}>
                <Field 
                    name="name" 
                    component={MyField} 
                    type="text" 
                    label = "Nombre"
                    parse= { toUpper }
                    format = { toLower }
                />    
                <Field 
                    name="dni" 
                    component={MyField} 
                    type="text" 
                    label = "DNI"
                /> 
                <Field 
                    name="age" 
                    component={MyField} 
                    type="number" 
                    validate={[isRequired, isNumber]}
                    label = "Edad"
                    parse = {toNumber}
                    normalize = { onlyGrow }
                /> 
                <CustomersActions>
                    <button type="submit" disabled={submitting}>Guardar</button>
                    <button type="button" onClick={onBack}>Cancelar</button>
                </CustomersActions>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    onBack: PropTypes.func.isRequired,
};

//Añadimos las funcionalidades de reactRedux a nuestro componente, ya reduxForm tiene actions creator por defecto
export default setPropsAsInitial( reduxForm( { form: 'EditCustomer', validate } )(CustomerEdit) );
