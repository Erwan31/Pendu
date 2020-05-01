import React from 'react';
import PropTypes from 'prop-types'
import './letter.css';

const Letter = ({letter, index, feedback}) => (<div className={"key"}>{feedback === 'discovered' ? letter : '_'}</div>)


Letter.propTypes = {
    letter: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
        'hidden',
        'discovered',
    ]).isRequired,
    index: PropTypes.number.isRequired,
}

export default Letter