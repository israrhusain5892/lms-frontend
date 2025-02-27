import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function ProgresssBar() {
  return (
    <div style={{ width: '100%',top:0 ,position:'absolute'}}>
      <LinearProgress style={{ width:'100%'}} />
    </div>
  );
}
