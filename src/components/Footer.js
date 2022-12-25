import React from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";

export default function Footer() {
  return (
    <div>
       <Box>
      <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-50px",
                   backgroundImage: 'url("https://w0.peakpx.com/wallpaper/420/258/HD-wallpaper-plain-dark-navy-blue-navy-blue.jpg")'}}>
        LITTLE LEAGUE
      </h1>
      <br></br>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Training</FooterLink>
          </Column>
          <Column>
            <Heading>Locations</Heading>
            <FooterLink href="#">Japan</FooterLink>
            <FooterLink href="#">Netherlands</FooterLink>
            <FooterLink href="#">Mexico</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <h6 style={{ color: "black", 
                   textAlign: "right", 
                   marginTop: "-40px" }}>Copyright © 2003-2022 Little League.
                   All Rights Reserved.</h6>
    </Box> 
    </div>
  )
}
