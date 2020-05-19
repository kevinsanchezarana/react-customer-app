import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCustomerByDni } from '../selectors/customers';
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';

class CustomerContainer extends Component {
    
    renderBody = () => (

        // Con el spread operations le pasamos el objeto como propiedades independientes al componente
        <Route 
            path="/customers/:dni/edit"
            children={
                ( { match } ) => {
                    const CustomerControl = match ? CustomerEdit : CustomerData;
                    return <CustomerControl {...this.props.customer}/>;
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
    customer: PropTypes.object.isRequired,
};

const mapStateToProps = ( state, props ) => ({
    customer: getCustomerByDni( state, props )
});

export default connect( mapStateToProps, {} )( CustomerContainer );