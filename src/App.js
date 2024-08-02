import React from 'react';
import TextareaRows from './Components/TextArea';
//import Switch from '@mui/material/Switch';
import { useState } from 'react';
import Button from "@mui/material/Button";
import TextArea from './Components/TextArea';



function App() {
  const [darkMode,setDarkMode]=useState(false);

  const handleChange=()=>{
    darkMode===false? setDarkMode(true):setDarkMode(false);  }
   
return (
    <div >
       <Button fullWidth
        style={{ backgroundColor:darkMode===true?"black":"bisque", color:darkMode===true?'bisque':'black' , borderRadius: '50px'}}
        onClick={handleChange}>enable darkMode</Button>
       < TextArea mode={setDarkMode} />
      </div>
  );
}
export default App;
