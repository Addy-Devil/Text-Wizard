import * as React from 'react';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';

export default function TextareaRows() {
  const [text, setText] = React.useState('hi');

  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);{/*template literals*/}
  return (
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
            </Box>}
      />
    </Box>
  );
}
