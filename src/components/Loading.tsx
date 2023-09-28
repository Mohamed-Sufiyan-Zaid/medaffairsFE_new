import React from 'react';
import { Dialog } from '@mui/material';

const Loading: React.FC = () => {
  return (
    <Dialog open={true}>
      <div style={{ width: '500px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 id='loading-icon' style={{ transform: 'translateY(-50%)' }}>Loading...</h3>
      </div>
    </Dialog>
  );
};

export default Loading;
