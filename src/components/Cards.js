import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Accordion,AccordionDetails,AccordionSummary} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Cards() {
  return (
    <div > 
        <CardGroup className='zoom_2'>
          <Card className='zoom' >
        <Card.Img variant="top" src="https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:eco%2Cw_1200%2Cx_2915%2Cy_1195/MTkxNTYyMjIwMDc1NzU1MTcx/shutterstock_204673579.jpg" />
        <Card.Body>


        <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         BASE BALL
        </AccordionSummary>
        <AccordionDetails>
          2023 Baseball Age Chart
        </AccordionDetails>
      </Accordion>
        </Card.Body>
      </Card>
      <Card className='zoom'>
        <Card.Img variant="top" src="https://i.guim.co.uk/img/media/45cd7555e9cdc50f12d2b380637803a39cae11ee/0_0_3391_2034/master/3391.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=d97808912f26fe4372f0ced9484f3413" />
        <Card.Body>
        <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         SOFT BALL
        </AccordionSummary>
        <AccordionDetails>
        2023 Softball Age Chart
        </AccordionDetails>
      </Accordion>


          





        </Card.Body>
      </Card>
      <Card className='zoom'>
        <Card.Img variant="top" src="https://i.guim.co.uk/img/media/ce79e1f3730d8e710873fafa7aa1272ba6ed4f9f/0_123_3543_2125/master/3543.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=787dfbb0bba9048f1ee929618b32305a" />
        <Card.Body>
          <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         CHALLENGER
        </AccordionSummary>
        <AccordionDetails>
        2023 Challenger Age Chart
        </AccordionDetails>
      </Accordion>


        </Card.Body>
      </Card>
          
    </CardGroup> 
    </div>
  )
}
