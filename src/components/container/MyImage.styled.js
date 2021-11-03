import styled from "styled-components";

const MyImage = styled.img`
  width: 15%;
  height: 40%;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 15% 0px 15% 15%;
  @media (orientation: portrait) {
    width: 25%;
    height: 30%;
  }
`;

export default MyImage;
