import { UPDATE_CUSTOMER } from '../constants';
import { createAction } from 'redux-actions';
import { apiPut } from '../api'; 
import { URL_CUSTOMERS } from '../api/urls'; 

//Cuando se le pasa una funcion que retorna una promise, la accion no se ejecuta (llama al reducer) hasta que esta acabe
export const updateCustomer = createAction(UPDATE_CUSTOMER, ( id, customer )  => apiPut( URL_CUSTOMERS, id, customer ) );