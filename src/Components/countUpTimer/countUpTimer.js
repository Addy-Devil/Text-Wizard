import { Typography } from '@mui/material';
import React from 'react';
import { useStopwatch } from 'react-timer-hook';

export default function MyStopwatch() {
    const {
      seconds,
      minutes,
      hours,
      isRunning,
      start,
      pause,
      reset,
    } = useStopwatch({ autoStart: true });
  
  
    return (
      <div>
        <Typography >You've Spent :  
             <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span> hours editing.</Typography>
    
        {/* <p>{isRunning ? 'Running' : 'Not running'}</p>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button> */}
      </div>
    );
  }
  
  