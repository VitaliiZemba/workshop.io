import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function MyCard({ title, description, buttonText, sizeFlag }) {
    return (
      <Card sx={{ backgroundColor: '#2f3237', color: 'white'}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx = {{justifyContent: 'flex-end', p: 1.5 }}>
            <Button variant="outlined">Register</Button>
        </CardActions>
      </Card>
    );
  }
  
  export default MyCard;