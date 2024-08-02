import * as React from "react";
import Button from "@mui/material/Button";
import { useState,useEffect } from "react";
//import { blueGrey } from "@mui/material/colors";


export default function ButtonUsage(props) { 
  const [bMode,setBMode]=useState(false);

  useEffect(() => {
    if (props.mode===true){
    setBMode(true)
    }
    else if (props.mode===false){
    setBMode(false)
    }

  }, [props.mode])

  console.log(props.mode);
    return (
    <>
      <Button 
        //variant="outlined"
        fullWidth
        style={{backgroundColor:bMode===true?"black":"white", borderRadius: '50px', textTransform:'none', color:bMode===true?"white": "black"}}
        onClick={props.click}>
          {props.content}
        </Button>

    </>
  );
};
