import React from 'react';
import { InfoPanel } from '../components/InfoPanel/InfoPanel';

export default { title: 'InfoPanel' };

export const GreyInfoPanel = () => (
  <div style={{ margin: "0 10px" }}>
    <InfoPanel>
      <div style={{ width: "300px", height: "200px", margin: "10px" }} />
    </InfoPanel>
  </div>
);
