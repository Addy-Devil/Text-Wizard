import * as React from "react";
import { Box, Button } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
//import IconButton from "@mui/joy/IconButton";
import ButtonUsage from "./ButtonUsage";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "../index.css";
import Typography from "@mui/material/Typography";
//import Draggable from "react-draggable";
//import { grey } from "@mui/material/colors";
import { Grid } from "@mui/joy";
import MyStopwatch from "./countUpTimer/countUpTimer";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default function TextareaRows(props) {
  const [btext, setBtext] = useState("");
  const [color, setColor] = useState(" black");
  const [content, setContent] = useState(null);
  const [text, setText] = useState("");
  const [boldt, setBoldt] = useState(false);
  const [italicT, setItalicT] = useState(false);
  const [emojiB, setEmojiB] = useState(false);
  
  console.log(props.mode); 


  const handleEmoji = () => {
    emojiB === false ? setEmojiB(true) : setEmojiB(false);
  };

  const upperCase = () => {
    let Upcase = text.toUpperCase();
    setText(Upcase);
    setContent("UpperCased!!!");
  };

  const lowCase = () => {
    let Lowcase = text.toLowerCase();
    setText(Lowcase);
    setContent("LowerCased!!!");
  };

  const handleOnClick = () => {
    setBtext("");
    setColor("green");
  };

  const makeItBold = () => {
    boldt === true ? setBoldt(false) : setBoldt(true);
  };
  const makeItalic = () => {
    italicT === true ? setItalicT(false) : setItalicT(true);
  };

  const handleClearClick = () => {
    // console.log("All text cleared");
    setText("");
    setText("")
    
  };
  const copyText = () => {
    if (text) {
      navigator.clipboard.writeText(text);
      alert("Text copied!");
    }
  };

  const checkIfEmpty = (action) => () => {
    if (text === "") {
      alert("Enter some character");
    } else {
      action();
    }
  };

  const handleEmojiClick = (emoji) => {
    setText(text + emoji.emoji);
    console.log(emoji);
  };
  return (
    <>
      <Box sx={{ p: 5 }}>
        {/* text box pe border : naya tareeka  */}

        <Typography variant="h4" pb={4} sx={{ fontFamily: "monospace" }}>
          Text-Editor
        </Typography>
      
          <Button onClick={handleEmoji} sx={{color:"white", backgroundColor:"green", marginBottom:"10px"}}>Emoji</Button>
          
          <EmojiPicker
                  onEmojiClick={handleEmojiClick}
                  open={emojiB === false ? false : true}
                  height={"57%"}
                  style={{position:"absolute", zIndex:1, marginLeft:"70%", marginTop:"10px"}}
                />
          <Textarea
            sx={{
              backgroundColor: props.darkMode === true ? "black" : "white",
              color:props.darkMode===true ? "white" : "black",
              fontWeight: boldt === true ? "bold" : "normal",
              fontStyle: italicT === true ? "italic" : "normal",
              width: "100%",
              height: "450px",
            }}
            /*color={props.mode===true? "black" : "white"}*/
            placeholder="Type here"
            value={text}
            onChange={(event) => setText(event.target.value)}
            // onChange={handleOnChange}
            variant="outlined"
            minRows={10}
            
          />

        
      </Box>
      <Grid container spacing={1} p={3}>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <ButtonUsage
            click={checkIfEmpty(upperCase)}
            content="Upper Case"
          />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <ButtonUsage click={lowCase} content="Lower Case" />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <ButtonUsage click={makeItBold} content="Bold" />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <ButtonUsage click={makeItalic} content="Italic" />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <ButtonUsage click={copyText} content="Copy Text" />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <ButtonUsage click={handleClearClick} content="Clear All" />
        </Grid>
      </Grid>
      
        <Typography variant="h4" mt={1} pb={1} sx={{ fontFamily: "monospace" }}>your report</Typography>

      <Grid container  spacing={3} p={2}>
          <Grid alignItems={"center"} item xs={12} sm={6} md={6} lg={6} xl={6} sx={{height:"100px"}}>
          <Card style={{borderRadius: '20px', backgroundColor:"bisque"}} >{/*never give width*/}
      
              <CardContent>
              <Typography gutterBottom variant="h5" sx={{ fontFamily: "monospace" }}>
                  Total Words
              </Typography>
              <Typography variant="body2" color="text.secondary">
              You've entered {text===""?0:text[text.length-1]===" "?text.split(" ").length-1:text.split(" ").length} words and {text.length}{" "}
              characters.
          
              </Typography>
            </CardContent>
      
        </Card>
        </Grid>

          <Grid alignItems={"center"} item xs={12} sm={6} md={6} lg={6} xl={6} sx={{height:"150px"}}>
           <Card style={{ borderRadius: '20px',backgroundColor:"bisque"}}>
            <CardContent>
              <Typography gutterBottom variant="h5" sx={{ fontFamily: "monospace" }} >
                  Time Spent
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <MyStopwatch/>
          
              </Typography>
            </CardContent>
           
            
           </Card>
          </Grid>
      </Grid>
      

    </>
  );
}
