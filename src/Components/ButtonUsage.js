import * as React from "react";
import Button from "@mui/material/Button";
//import { blueGrey } from "@mui/material/colors";


export default function ButtonUsage(props) {
    return (
    <>
      <Button
        //variant="outlined"
        fullWidth
        style={{ backgroundColor: "black", color:'bisque' , borderRadius: '50px'}}
        onClick={props.click}>
          {props.content}
        </Button>

    </>
  );
};
