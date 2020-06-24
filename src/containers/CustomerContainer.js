import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCustomerByDni } from '../selectors/customers';
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';
import { fetchCustomers } from '../actions/fetchCustomers';
import { updateCustomer } from '../actions/updateCustomer';

class CustomerContainer extends Component {


    componentDidMount() {
        if ( !this.props.customer ){
            this.props.fetchCustomers();
        }
    }
    

    handleSubmit = values => {
        const { id } = values;
        this.props.updateCustomer( id, values );
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }    
    
    renderBody = () => (

        // Con el spread operations le pasamos el objeto como propiedades independientes al componente
        <Route 
            path="/customers/:dni/edit"
            children={
                ( { match } ) => {
                    const CustomerControl = match ? CustomerEdit : CustomerData;
                    return <CustomerControl { ...this.props.customer } 
                                            onSubmit={this.handleSubmit}
                                            onBack={this.handleOnBack}
                            />;
                }
            }
        >
        </Route>

    )
    
    render() {
        return (
            <div>
                <AppFrame
                    header={`Cliente ${this.props.dni}`}
                    body={this.renderBody()}
                >
                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = ( state, props ) => ({
    customer: getCustomerByDni( state, props )
});

export default withRouter ( connect( mapStateToProps, { fetchCustomers, updateCustomer } )( CustomerContainer ) ); 