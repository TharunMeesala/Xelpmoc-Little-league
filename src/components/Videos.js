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
      <Card className='zoom'>
        <Card.Img variant="top" src="https://fanbuzz.com/wp-content/uploads/sites/5/2021/08/Gavin-Weir.png" />
        <Card.Body>
          <Card.Text>
          <h3>7 FIRST FEMALES IN LITTLE LEAGUE HISTORY</h3>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='zoom'>
        <Card.Img variant="top" src="https://s.hdnux.com/photos/01/26/44/20/22692879/6/ratio3x2_1800.jpg" />
        <Card.Body>
          <Card.Text>
            <h3>2022 Happy Holidays from Little League®...</h3>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='zoom'>
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
