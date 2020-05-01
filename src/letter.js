import React from 'react';
import PropTypes from 'prop-types'

const Letter = ({letter, index, feedback}) => (<div className={`letter ${letter}`}>{feedback === 'discovered' ? letter : '_'}</div>)


Letter.propTypes = {
    letter: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
        'hidden',
        'discovered',
    ]).isRequired,
    index: PropTypes.number.isRequired,
}

export default Letter