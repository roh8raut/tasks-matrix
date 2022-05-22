import React from 'react';
import { string, number, bool, func } from 'prop-types';

const Radio = ({ id, name, value, checked, onChangeHandler, label }) => {
  return (
    <label htmlFor={id}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChangeHandler}
      />
      {label}
    </label>
  );
};

Radio.propTypes = {
  id: string,
  name: string,
  value: string,
  checked: bool,
  onChangeHandler: func,
  label: string
};

export default Radio;
