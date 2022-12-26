import React from 'react'
import Card from 'react-bootstrap/Card';

export default function News() {
  return (
    <div>
        <Card className="boom">
        <Card.Img variant="top" src="https://ewscripps.brightspotcdn.com/dims4/default/6fd60e7/2147483647/strip/true/crop/640x336+0+72/resize/1200x630!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2017%2F04%2F08%2FMillie%20Bobby%20Brown_1491683356469_57992080_ver1.0_640_480.jpg" />
        <Card.Body>
          <Card.Text>
          December 19, 2022<br></br>
          Each year, moments of sportsmanship from on and off the playing field are honored at The Musial Awards in St. Louis, and during this year’s event, a current and former Little Leaguer®…
          <a href="https://www.littleleague.org/news/little-leaguers-past-and-present-shine-at-the-2022-musial-awards/">READ MORE</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
