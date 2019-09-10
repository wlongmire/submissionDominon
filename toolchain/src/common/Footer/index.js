import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Footer = (props) => {
  return (
    <footer>
      <div className="container d-flex align-items-center justify-content-between">
        <div>
          <img src="./images/footer-logo.png" /> <strong>2019</strong>
        </div>
        <span>
          longmireDesign
        </span>
      </div>
    </footer>);
}

export default Footer;