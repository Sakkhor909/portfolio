import React from 'react';
import { MyImageCSS } from './styles/Styled';
import Image from '../assets/images/MyImage.jpg';

function MyImage() {
    return (
        <MyImageCSS src={Image} alt="My Image" />
    )
}

export default MyImage;
