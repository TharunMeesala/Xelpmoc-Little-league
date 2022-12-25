import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Videos() {
  return (
    <div className="boom">
        <h1>LATEST VIDEOS</h1>
        <h4 className='H5Hover'>ALL VIDEOS | LLB VIDEOS | LLS VIDEOS </h4>
        <br></br>
         <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://res.cloudinary.com/little-league/image/upload/c_fill,dpr_auto,h_320,w_570,q_auto,c_fill,g_face/v1590504342/trademarks-red-private-5ecd2b965f1e1.jpg" />
        <Card.Body>
          <Card.Text>
          <h3>7 FIRST FEMALES IN LITTLE LEAGUE HISTORY</h3>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.pinimg.com/736x/46/5c/7e/465c7edaff954f376d27faa42480fea7.jpg" />
        <Card.Body>
          <Card.Text>
            <h3>2022 Happy Holidays from Little League®...</h3>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/business-entrepreneurship-symposium-speaker-giving-260nw-1331538500.jpg" />
        <Card.Body>
          <Card.Text>
          <h3>LLU Umpire Education</h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  )
}
