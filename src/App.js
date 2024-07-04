import AppBar1 from './Components/AppBar/AppBar';
import './App.css' 
import { createTheme,ThemeProvider } from '@mui/material';
import { useState } from 'react';
function App() {
  const [darkMode,setDarkMode]= useState(false)

  const theme=createTheme({palette:{
      type:darkMode?"dark":"light"
  }})
   return (
    <ThemeProvider theme={theme}>
    <>
     <AppBar1 check={darkMode} change={()=> setDarkMode(!darkMode)}/>

     </>
     </ThemeProvider>
   );
 }

 export default App;

