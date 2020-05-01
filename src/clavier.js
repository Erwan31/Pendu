import React from 'react';
import PropTypes from 'prop-types'

const Clavier = ({keyLetter, index, onClick}) => (<div className={`keyletter ${index}`} onClick={() => onClick(keyLetter)}>{keyLetter}</div>)

export default Clavier;