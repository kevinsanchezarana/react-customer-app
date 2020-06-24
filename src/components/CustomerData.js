import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';

const CustomerData = ( { name, dni, age, onBack } ) => {
    return (
        <div>
            <h2>Datos del cliente</h2>
            <div><strong>Nombre<i>{name}</i></strong></div>
            <div><strong>DNI<i>{dni}</i></strong></div>
            <div><strong>Edad<i>{age}</i></strong></div>
            <CustomersActions>
                <button onClick={onBack}>Volver</button>
            </CustomersActions>
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default CustomerData;