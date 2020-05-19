import { createSelector } from 'reselect';

export const getCustomers = state => state.customers;

//Al usar selectores evitamos que los componentes conozcan logica del estado y cachea
//El selector recibe 2 funciones, que queremos escoger del estado 
//Y del resultado del estado, que retornamos
export const getCustomerByDni = createSelector (
    (state, props) => state.customers.find( c => c.dni === props.dni ),
    customer => customer
); 