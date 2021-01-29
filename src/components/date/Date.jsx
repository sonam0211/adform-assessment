/* eslint-disable react/prop-types */
import React from 'react';

import './Date.css';

const Date = ({ text, label, onChange }) => (
  <input
    data-testid="dateField"
    type="date"
    placeholder={label}
    className="container"
    value={text}
    onChange={(event) => onChange(event.target.value)}
  />
);

export default Date;
