import React, { Component } from 'react';


//HOC: High Order Component - Implementacion patron Decorator añadir funcionalidad a un componente sin modificarlo
// Esta clase es un decorador que le añade funcionalidad al componente pasado por parametro y copia sus propiedades en initialValues
//enableReinitialize -> permite que al renderizar un componente siempre se apliquen los initialValues al form ya que sino solo se haría en el primer render del componente
export const setPropsAsInitial = WrappedComponent => (
    class extends Component {
        render() {
            return <WrappedComponent {...this.props} initialValues={this.props} enableReinitialize  />;
        }
    }
)