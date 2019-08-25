import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">

          <Link className="navbr-brand" to="/">SubDom</Link>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse push-right w-100 justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item m-1">
                <Link to="/new" className="nav-link btn btn-primary btn-sm">Add A Submission</Link>
              </li>

              <li className="nav-item m-1">
                <Link to="/edit" className="nav-link btn btn-primary btn-sm">Edit A Submission</Link>
              </li>

              <li className="nav-item m-1">
                <Link to="/edit" className="nav-link btn btn-primary btn-sm">Got A Response!</Link>
              </li>

              <li className="nav-item m-1">
                <Link to="/stats" className="nav-link btn btn-primary btn-sm">View Stats</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>);
  }
}