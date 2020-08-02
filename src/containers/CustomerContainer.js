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
import { SubmissionError } from 'redux-form';

class CustomerContainer extends Component {


    componentDidMount() {
        if ( !this.props.customer ){
            this.props.fetchCustomers();
        }
    }
    
    isPromise = value => {
        return value && value.then && typeof value.then === 'function';
    }

    handleSubmit = values => {
        console.log(JSON.stringify(values));
        const { id } = values; 
        const promise = this.props.updateCustomer(id, values);
        if( !this.isPromise( promise ) ){
            return promise;
        }

        debugger;
        promise.then ( r => {
            if ( r.error ){
                throw new SubmissionError(r.payload);
            }
        });
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }    

    handleOnSubmitSuccess = () => {
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
                                            onSubmitSuccess={this.handleOnSubmitSuccess}
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