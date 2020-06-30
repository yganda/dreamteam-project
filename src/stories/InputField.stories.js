import React, { useState } from 'react';
import { InputField } from '../components/InputField';
import Checkbox from '../components/Checkbox';

export default { title: 'Input' };

export const MainButton = () => (
  <div style={{ width: "300px", margin: "0 10px" }}>
    <p>Simple input field</p>
    <InputField type="text" placeholder="Simple input field" />
    <p>Password field</p>
    <InputField type="password" placeholder="Password" />
  </div>
);

export const MainCheckbox = () => {
  const [isChecked, setIsChecked] = useState();
  const handleCheck = () => setIsChecked(!isChecked);

  return (
    <div style={{ width: "300px", margin: "0 10px" }}>
      <Checkbox checked={isChecked} label="Label" onChangeCallback={ handleCheck } />
    </div>
  )
};
