import AppBar1 from './Components/AppBar/AppBar';
import './App.css' 
import {Card} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Paper from '@mui/material/Paper';

function App() {
  const [darkMode,setDarkMode]= useState(false)

  const theme = createTheme({
    palette: {
      type:darkMode?'dark':'light'
    },
  });
   return (
    
    <ThemeProvider theme={theme}>
    <Paper sx={{height:'250vh'}}><>
     <AppBar1 check={darkMode} change={()=> setDarkMode(!darkMode)}/>
      
     </>
      <Card><h1>Dark Modeelulilulilulilu</h1>
      <h1>Dark Modeelulilulilulilu</h1>
      <h1>Dark Modeelulilulilulilu</h1>  
      <h1>Dark Modeelulilulilulilu</h1></Card>  
      </Paper> </ThemeProvider>
    
);
 }

 export default App;

