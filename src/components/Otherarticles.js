import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export default function Otherarticles() {
  return (
    <div>
        <CardGroup>
      <Card className="boom">
        <Card.Img variant="top" src="https://s.hdnux.com/photos/01/26/25/16/22631326/4/rawImage.jpg" />
        <Card.Body>
          <Card.Title> GENERAL  WORLD SERIES</Card.Title>
          <Card.Text>
          Bill Aboumrad Taking Over as Tournament Director for Little League® Intermediate (50/70) Division Baseball World Series<br></br>
          December 14, 2022
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="boom">
        <Card.Img variant="top" src="https://s.hdnux.com/photos/01/26/61/66/22748544/7/1200x0.jpg" />
        <Card.Body>
          <Card.Title>Musuem</Card.Title>
          <Card.Text>
          World of Little League® Museum Earns Fifth Straight ISHY Award <br></br>
          December 14, 2022.
          </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>
    </div>
  )
}
