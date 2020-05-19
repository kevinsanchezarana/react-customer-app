import React, { Component } from 'react';


//HOC: High Order Component - Implementacion patron Decorator añadir funcionalidad a un componente sin modificarlo
// Esta clase es un decorador que le añade funcionalidad al componente pasado por parametro y copia sus propiedades en initialValues
export const setPropsAsInitial = WrappedComponent => (
    class extends Component {
        render() {
            return <WrappedComponent {...this.props} initialValues={this.props} />;
        }
    }
)