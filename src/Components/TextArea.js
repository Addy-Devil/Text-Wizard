import * as React from 'react';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import ButtonUsage from './ButtonUsage';
import { useState } from "react";
import EmojiPicker from 'emoji-picker-react';

export default function TextareaRows() {
  const [content,setContent]=useState(null);
  const upperCase = () => {
    let Upcase=text.toUpperCase();
    setText(Upcase);
    setContent("UpperCased!!!")}

  const lowCase = () =>{
      let Lowcase=text.toLowerCase();
      setText(Lowcase);
      setContent("LowerCased!!!")};

  const handleOnClick = () => {
      setBtext("Subscribed!!:)");
      setColor("green");
      };
        const [btext, setBtext] = useState("Subscribe?");
        const [color, setColor] = useState(" black");
  
  const [text, setText] = useState('');
  const addEmoji = (emoji) => () =>setText(`${text}${emoji}`);   {/*template literals*/}
  

  return (<>
    <Box sx={{ p: 5,'--Textarea-focused': 1}}>
        EXPRESS YOURSELF...
      <Textarea
        placeholder="Let's dive in…"
        value={text}
        onChange={(event) => setText(event.target.value)}
        variant="outlined"
        minRows={10}
         startDecorator={
            <Box sx={{ display: 'flex', gap: 0.5, flex: 1 }}>
               <IconButton variant="outlined" color="neutral" onClick={addEmoji('👍')}>
                 👍
               </IconButton>
               <IconButton variant="outlined" color="neutral" onClick={addEmoji} ><EmojiPicker/>
               </IconButton>
             </Box>}
      />
    </Box>
    <ButtonUsage click={upperCase} content="Convert to UpperCase?" />
    <ButtonUsage click={lowCase} content="Convert to LowerCase?"/>
    <ButtonUsage click={handleOnClick} content={btext} />
    {/* <ButtonUsage click={makeItBold} content="Bold" /> */}
    
    </>
  );
  };
   
  