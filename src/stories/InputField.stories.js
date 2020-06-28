import React from 'react';
import { InputField } from '../components/InputField';

export default { title: 'Input' };

export const MainButton = () => (
  <div style={{ width: "300px", margin: "0 10px" }}>
    <p>Simple input field</p>
    <InputField type="text" placeholder="Simple input field" />
    <p>Password field</p>
    <InputField type="password" placeholder="Password" />
  </div>
);