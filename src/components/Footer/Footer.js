import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <Container fluid className="bg-dark m-0 footer text-white d-flex justify-content-center align-items-center">
            <p><small>All Copyrights reserved by @dmr</small></p>
        </Container>
    );
};

export default Footer;