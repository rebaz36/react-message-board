import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export const Header = ({className}) => (
    <div className={className}>
        <Jumbotron>
        <h1>ICS 221 Message Board App</h1>
        </Jumbotron>
    </div>
)

export default Header;