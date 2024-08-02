import React from 'react';
import TextareaRows from './Components/TextArea';
//import Switch from '@mui/material/Switch';
import { useState } from 'react';
import Button from "@mui/material/Button";
import TextArea from './Components/TextArea';



function App() {
  const [darkMode,setDarkMode]=useState(false);

  const handleChange=()=>{
    setDarkMode(true);  }
   
return (
    <div >
       <Button 
        onClick={handleChange}>enable darkMode</Button>
       < TextArea mode={setDarkMode} />
      </div>
  );
}
export default App;
