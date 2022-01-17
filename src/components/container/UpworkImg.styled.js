import styled from "styled-components";

const UpworkImg = styled.img`
  width: 50px;
  height: 45px;
  border-radius: 15% 0px 15% 15%;
  cursor: pointer;
  transform: perspective(500px) scale3d(1, 1, 1) translateZ(100px);
  transition: all.5s transform ease-in;
  &:hover {
    transform: scale3d(1.3, 1.3, 1.5);
  }
  @media (orientation: portrait) {
    width: 25%;
    height: 30%;
  }
`;

export default UpworkImg;
