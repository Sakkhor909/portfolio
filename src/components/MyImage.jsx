import React from "react";
import styled from "styled-components";
import Image from "../assets/images/MyImage.jpg";

const MyImage = () => <MyImageCSS src={Image} alt="My Image" />;

export default MyImage;

const MyImageCSS = styled.img`
  width: 15%;
  height: 40%;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 15% 0px 15% 15%;
  @media (orientation: portrait) {
    width: 30%;
    height: 30%;
    border-radius: 50%;
    top: -5%;
    right: -5%;
  }
`;
