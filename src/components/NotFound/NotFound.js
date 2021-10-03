import React from 'react';
import './NotFound.css';
import notfound from '../../images/notfound.jpg';
import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';

const NotFound = () => {
    // const history = useHistory();
    const handleGoBack = () => {
        window.history.back();
    }
    return (
      <div>
            <img src={notfound} alt="" />
            <br />
        <Button onClick={handleGoBack} variant="primary">Go Back</Button>{" "}
      </div>
    );
};

export default NotFound;