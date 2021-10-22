import styled from "styled-components";

const MyImage = styled.img`
  width: 15%;
  height: 40%;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 15% 10px 15% 15%;
  @media (orientation: portrait) {
    width: 25%;
    height: 30%;
    border-radius: 50%;
    top: -4%;
    right: -6%;
  }
`;

export default MyImage;
