import React from 'react';
import { Button } from '../components/Button';

export default { title: 'Button' };

export const MainButton = () => (
  <div style={{ width: "300px", margin: "0 10px" }}>
    <Button color='blue'>Blue button</Button>
    <br />
    <br />
    <Button color='dark'>Dark button</Button>
    <br />
    <br />
    <Button color='green'>Success button</Button>
    <br />
    <br />
    <Button disabled>Disabled button</Button>
  </div>
);
