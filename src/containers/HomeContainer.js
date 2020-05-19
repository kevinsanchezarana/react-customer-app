import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';
import { withRouter } from 'react-router-dom';

class HomeContainer extends Component {
    
    handleOnClick = () => {
        this.props.history.push('/customers');
    }
    
    render() {
        return (
            <div>
                <AppFrame
                    header="Home"
                    body={
                        <div>
                            <CustomersActions>
                                <button onClick={ this.handleOnClick }>Listado de clientes</button>
                            </CustomersActions>
                        </div>
                    }
                
                ></AppFrame>
            </div>
        );
    }
}

//Usamos la funcion withRouter para añadirle las propiedades del Route al componente donde esta history
export default withRouter( HomeContainer );