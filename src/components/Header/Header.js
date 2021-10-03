import React from 'react';
import NavbarContainer from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <NavbarContainer></NavbarContainer>
            <Carousel></Carousel>
        </div>
    );
};

export default Header;