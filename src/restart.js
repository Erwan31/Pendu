import React from 'react';
import PropTypes from 'prop-types'
import './restart.css';


const Restart = (onClick, obj) => (<div 
    className={"restart"} 
    onClick={ () => onClick(obj)} >Well done! Click to restart...</div>);

export default Restart;

