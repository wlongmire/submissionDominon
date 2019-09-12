import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="container">

        <Link className="navbr-brand" to="/">
          <img src="./images/logo-02.png" />
        </Link>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse push-right w-100 justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item m-1">
              <Link to="/submissions/new" className="nav-link">Create.</Link>
            </li>

            <li className="nav-item m-1">
              <Link to="/submissions/edit" className="nav-link">Edit.</Link>
            </li>

            <li className="nav-item m-1">
              <Link to="/submissions/view" className="nav-link">View.</Link>
            </li>

            <li className="nav-item m-1">
              <Link to="/submissions/stats" className="nav-link">Stats.</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>);
}

export default NavBar;