import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constants';

//Se pueden añadir mas de una accion con handleActions, si solo queremos una se debe usar handleAction
//Su parametros son las acciones a tratar y el valor del estado por defecto
export const customers = handleActions (
    //Devolvemos una copia del payload
   { [FETCH_CUSTOMERS] : ( state, action ) => [...action.payload]  },
   []
);