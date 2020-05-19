import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';
import { apiGet } from '../api'; 
import { URL_CUSTOMERS } from '../api/urls'; 

//Cuando se le pasa una funcion que retorna una promise, la accion no se ejecuta (llama al reducer) hasta que esta acabe
export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet( URL_CUSTOMERS ) );