import * as React from "react";
import Button from "@mui/material/Button";
import { blueGrey } from "@mui/material/colors";


export default function ButtonUsage(props) {
    return (
    <>
      <Button
        variant="contained"
        fullWidth
        style={{ backgroundColor: blueGrey }}
        onClick={props.click}>
          {props.content}
        </Button>
       
      
      
    </>
  );
};
