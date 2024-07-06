import * as React from 'react';
import { Box } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import { useState } from 'react';
import ButtonUsage from './ButtonUsage';
import Typography from '@mui/material/Typography';
import '../index.css';
export default function TextareaRows() {
  //const [text, setText] = React.useState('hi');

  
  const [text,setText] = useState();
  

  const checkIfEmpty = (action) => () => {
    if (text === '') {
      alert('Enter some character');
    } else {
      action();
    }
  };

  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
  };
 
  
  
   const handleUpClick = ()=>{
     console.log("Uppercase was clicked");
     setText(text.toUpperCase());
   };
   const handleLowClick = ()=>{
    console.log("Lowercase was clicked");
    setText(text.toLowerCase());
  };
  const handleClearClick = ()=>{
    console.log("All text cleared");
    setText('');
  };
  const copyText=()=>{
    if(text){
      navigator.clipboard.writeText(text)
      alert("Text copied!");
    }
  };
    // const handleItalicsClick = ()=>{
    //   console.log("Uppercase was clicked");
    //   setText(text.italics());
    // };

    // const [isBold, setBold]=useState(false);
    
    //   const handleBold= () =>{
    //     setBold(!isBold)
    //   }; const textStyle= {
    //     fontWeight:isBold?'bold':'normal'
    //   }
    
  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);{/*template literals*/}
  return (
    <Box sx={{ p: 5,'--Textarea-focused': 1}}>
      <Typography variant='h4' paddingY={3}> Text-Editor </Typography> 
      <Textarea
        placeholder="Type here"
        value={text}
      //onChange={(event) => setText(event.target.value)}
      onChange={handleOnChange}
        variant="outlined"
        minRows={10}
         startDecorator={
             <Box sx={{ display: 'flex', gap: 0.5, flex: 1 }}>
               <IconButton variant="outlined" color="neutral" onClick={addEmoji('👍')}>
                 👍
               </IconButton>
             </Box>}
      /> 

    <ButtonUsage label="Uppercase" onClick={checkIfEmpty(handleUpClick)} />
    <ButtonUsage label="Lowercase" onClick={checkIfEmpty(handleLowClick)} />
    <ButtonUsage label="Copy Text" onClick={checkIfEmpty(copyText)} />
    <ButtonUsage label="Clear All" onClick={checkIfEmpty(handleClearClick)} />
    {/* <ButtonUsage label="Bold" onClick={handleBold} /> */}

    <Box>
      <Typography variant="h4" paddingY={3} >
        Session Insights
      </Typography>
      {/* <Typography>
        You've entered {(text.split(" ").length)} words and {(text.length)} characters.
      </Typography> */}

    </Box>
    </Box>
  
    
  );
}
