import * as React from "react";
import { Box, Button } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/joy/IconButton";
import ButtonUsage from "./ButtonUsage";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "../index.css";
import Typography from "@mui/material/Typography";

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
    console.log("All text cleared");
    setText("");
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

  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
  {
    /*template literals*/
  }
const handleEmojiClick = (emoji) => {
  setText(`${text}${emoji.emoji}`)
  console.log(emoji)
}
  return (
    <>
      <Box sx={{ p: 5, "--Textarea-focused": 1 }}>
        {/* text box pe border : naya tareeka  */}
        <Typography variant="h4" pb={3}>
          {" "}
          Text-Editor{" "}
        </Typography>
        <Textarea
          sx={{
            fontWeight: boldt === true ? "bold" : "normal",
            fontStyle: italicT === true ? "italic" : "normal",
          }}
          placeholder="Type here"
          value={text}
          onChange={(event) => setText(event.target.value)}
          // onChange={handleOnChange}
          variant="outlined"
          minRows={10}
          startDecorator={
            <Box>
              <IconButton
                variant="outlined"
                color="neutral"
                onClick={addEmoji("👍")}
              >
                👍
              </IconButton>
              <Button onClick={handleEmoji}>Click to open emoji bar </Button>{" "}
              <EmojiPicker onEmojiClick={handleEmojiClick} open={emojiB === false ? false : true} />
            </Box>
          }
        />
      </Box>
      <ButtonUsage
        click={checkIfEmpty(upperCase)}
        content="Convert to UpperCase?"
      />
      <ButtonUsage click={lowCase} content="Convert to LowerCase?" />
      <ButtonUsage click={handleOnClick} content={btext} />
      <ButtonUsage click={makeItBold} content="Bold" />

      <ButtonUsage click={makeItalic} content="Italic" />
      <ButtonUsage click={copyText} content="Copy Text" />
      <ButtonUsage click={handleClearClick} content="Clear All" />

      <Typography>
        You've entered {text.split(" ").length} words and {text.length}{" "}
        characters.
      </Typography>
    </>
  );
  };
   
  