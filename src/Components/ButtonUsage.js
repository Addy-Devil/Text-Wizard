import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';



export default function ButtonUsage()
 {
  const handleOnClick=()=>{
    setText("Subscribed!!:)");
    setColor("green");
  }
  const [text,setText]=useState("Subscribe!");
  const [color,setColor]=useState(" black");

  return (<> 
             
<Button variant="contained" style={{backgroundColor:color}} onClick= { handleOnClick } >{text}</Button>
</>
  
  );
}
