import * as React from 'react';
import Button from '@mui/material/Button';

const ButtonUsage = ({ label, onClick }) => {
  return (<>
     
         <Button onClick={onClick}>
          {label}
        </Button> 
       
     </>
  );
};
export default ButtonUsage;