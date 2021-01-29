/* eslint-disable react/prop-types */
import React from 'react';

import './InputBox.css';

const InputBox = (props) => (
  <input
    data-testid="inputField"
    type="text"
    placeholder={props.label}
    className="container"
    value={props.text}
    onChange={(event) => props.onChange(event.target.value)}
  />
);

export default InputBox;
