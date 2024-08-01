import React from 'react';
import TextareaRows from './Components/TextArea';
//import Switch from '@mui/material/Switch';
import { useState } from 'react';
import Button from "@mui/material/Button";



function App() {
  const [darkMode,setDarkMode]=useState(false);

  const handleChange=()=>{
    setDarkMode(true);  }
   
return (
    <div >
       <Button fullWidth
        style={{ backgroundColor: "black", color:'bisque' , borderRadius: '50px'}}
        onClick={handleChange}>enable darkMode</Button>
       < TextareaRows mode={darkMode} />
      </div>
  );
}

export default App;
