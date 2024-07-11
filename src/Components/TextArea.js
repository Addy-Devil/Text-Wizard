import * as React from "react";
import { Box, Button } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/joy/IconButton";
import ButtonUsage from "./ButtonUsage";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "../index.css";
import Typography from "@mui/material/Typography";
import Draggable from "react-draggable";
import { grey } from "@mui/material/colors";
import { Grid } from "@mui/joy";
import MyStopwatch from "./countUpTimer/countUpTimer";

export default function TextareaRows() {
  const [btext, setBtext] = useState("");
  const [color, setColor] = useState(" black");
  const [content, setContent] = useState(null);
  const [text, setText] = useState("");
  const [boldt, setBoldt] = useState(false);
  const [italicT, setItalicT] = useState(false);
  const [emojiB, setEmojiB] = useState(false);


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
          {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={2}> */}
          {/* <Draggable> */}
          {/* <Box
                sx={{
                  position: "relative",
                  borderRadius: "8%",
                  overflow: "auto",
                }}
              >
                <EmojiPicker
                  onEmojiClick={handleEmojiClick}
                  open={emojiB === false ? false : true}
                />
              </Box> */}
          {/* </Draggable> */}
          {/* </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Button onClick={handleEmoji}>Click to open emoji bar </Button>
          </Grid> */}
          {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={2}> */}
          <Button onClick={handleEmoji} sx={{color:"white", backgroundColor:"green", marginBottom:"10px"}}>Emoji</Button>
          
          <EmojiPicker
                  onEmojiClick={handleEmojiClick}
                  open={emojiB === false ? false : true}
                  height={"57%"}
                  style={{position:"absolute", zIndex:1, marginLeft:"70%", marginTop:"10px"}}
                />
          <Textarea
            sx={{
              fontWeight: boldt === true ? "bold" : "normal",
              fontStyle: italicT === true ? "italic" : "normal",
              width: "100%",
              height: "450px",
            }}
            placeholder="Type here"
            value={text}
            onChange={(event) => setText(event.target.value)}
            // onChange={handleOnChange}
            variant="outlined"
            minRows={10}
            startDecorator={<Box></Box>}
          />

        {/* </Grid> */}
      </Box>
      <Grid container spacing={1}>
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
      <Box mt={3} p={2}>
        <Typography variant="h4">Preview</Typography>
      <Typography>
        You've entered {text===""?0:text[text.length-1]===" "?text.split(" ").length-1:text.split(" ").length} words and {text.length}{" "}
        characters.
      </Typography>
      <MyStopwatch/>
      </Box>
    </>
  );
}
