import * as React from 'react';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import ButtonUsage from './ButtonUsage';

export default function MediaCard() {
  return (<>
    <Card >{/*never give width*/}
      
      <CardContent>
        <Typography gutterBottom variant="h5">
          Total Words
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
          
        </Typography>
      </CardContent>
      
    </Card>

</>
  );
}
