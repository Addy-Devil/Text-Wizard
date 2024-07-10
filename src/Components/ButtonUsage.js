import * as React from "react";
import Button from "@mui/material/Button";
//import { blueGrey } from "@mui/material/colors";


export default function ButtonUsage(props) {
    return (
    <>
      <Button
        variant="outlined"
        //style={{ backgroundColor: black }}
        
        onClick={props.click}>
          {props.content}
        </Button>
    </>
  );
};
