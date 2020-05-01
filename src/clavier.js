import React from 'react';
import PropTypes from 'prop-types'
import './clavier.css'

const Clavier = ({keyLetter, index, onClick}) => (<div className={"keyletter"} onClick={() => onClick(keyLetter)}>{keyLetter}</div>)

export default Clavier;