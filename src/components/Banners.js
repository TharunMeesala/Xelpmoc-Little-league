import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Banners() {
  return (
    <div>
        <center>
        <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fvga3-1.fna.fbcdn.net/v/t1.6435-9/164564262_10157998369318030_8519875552934630136_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=wbPEEUJCAYsAX-BKybf&_nc_ht=scontent.fvga3-1.fna&oh=00_AfBMfjX7cvRLOKoOchU8GgrkRovYaDwPhKsqnejrmEqQPg&oe=63CBBE53"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/empty-baseball-stadium-arena-with-fans-crowd-sunny-day-lights_336913-601.jpg?w=2000"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://llws2017.s3.us-west-2.amazonaws.com/emails/dabulletin/2022/december/rulebook-app-promo.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/little-league/image/upload/c_limit,dpr_auto,q_auto,c_fill,g_face/v1535119611/2018-llbws-final-four-hero2.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </center>

    </div>
  );
}
