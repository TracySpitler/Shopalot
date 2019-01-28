import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import PageNotFound from '../assets/images/ErrorPage404.jpg';

const NotFound = () => (
  <div>
    <div className="container">
      <img className='404' src={PageNotFound} style={{width: '100%', display: 'block', margin: 'auto'}} />
      <Button
        className="home-btn"
      ><Link to="/">Go Home</Link></Button>
    </div>
    <center>Vector Illustration by <a href="https://www.vecteezy.com/vector-art/250876-error-404-unavailable-web-page-file-not-found-concept">www.vecteezy.com</a></center>
  </div>
);

export default NotFound;
