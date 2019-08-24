import React from 'react';

export default class NavBar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container">

          <a class="navbr-brand" href="#">SubDom</a>
          <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse push-right w-100 justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item m-1">
                <a href="#" class="nav-link btn btn-primary btn-sm">Add A Submission</a>
              </li>

              <li class="nav-item m-1">
                <a href="#" class="nav-link btn btn-primary btn-sm">Edit A Submission</a>
              </li>

              <li class="nav-item m-1">
                <a href="#" class="nav-link btn btn-primary btn-sm">Got A Response!</a>
              </li>

              <li class="nav-item m-1">
                <a href="#" class="nav-link btn btn-primary btn-sm">View Stats</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>);
  }
}