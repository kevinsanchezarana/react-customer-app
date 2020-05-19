import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

const AppFrame = ( { header, body } ) => {
    return (
        <div className="app-frame">
            <div><AppHeader title={header}></AppHeader></div>
            <div>{body}</div>
            <div>Aplicación Simple de Ejemplo</div>
        </div>
    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
};

export default AppFrame;