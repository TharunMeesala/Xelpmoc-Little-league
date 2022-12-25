import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Grid from '@mui/material/Grid';

export default function Placeholders() {
  return (
    <div>
      <Grid container={true} spacing={2}>
      <Grid item={true} xs={12} sm={6}> 
          <Card >
      <Card.Img variant="top" src="https://res.cloudinary.com/little-league/image/upload/c_limit,dpr_auto,q_auto,c_fill,g_face/v1633359696/prepare-rg-hero-615b1750541c5.jpg" />
        <Card.Body>
          <Card.Title>PREPARE</Card.Title>
          <Card.Text>
          Preparing for the season includes the administrative responsibilities associated with operating your local league.
          </Card.Text>
          <Button class="btn"style={{backgroundColor:'red', color:'white'}}>VIEW MORE</Button>
        </Card.Body>
        
      </Card>
      </Grid>
      <Grid item={true} xs={12} sm={6}>
      <Card >
        <Card.Img variant="top" src="https://res.cloudinary.com/little-league/image/upload/c_limit,dpr_auto,q_auto,c_fill,g_face/v1633360213/play-rg-hero-615b19557a818.jpg" />
        <Card.Body>
          <Card.Title>PLAY</Card.Title>
          <Card.Text>
          The eligibility of players and the education of volunteers are crucial to a safe and rewarding Little League experience.
          </Card.Text>
          <Button class="btn" style={{backgroundColor:'black',color:'white'}}>VIEW MORE</Button>
        </Card.Body>
      </Card>
      </Grid>
      </Grid>      
    </div>
  
  )
}
