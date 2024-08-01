import React from 'react';
import TextareaRows from './Components/TextArea';
//import Switch from '@mui/material/Switch';
import { useState } from 'react';
import Button from "@mui/material/Button";



function App() {
  const [darkMode,setDarkMode]=useState(false);

  const handleChange=()=>{
    darkMode===false? setDarkMode(true):setDarkMode(false);  }
   
return (
    <div >
       <Button fullWidth
        style={{ backgroundColor:darkMode===true?"black":"bisque", color:darkMode===true?'bisque':'black' , borderRadius: '50px'}}
        onClick={handleChange}>enable darkMode</Button>
       < TextareaRows mode={darkMode} />
      </div>
  );
}

export default App;
