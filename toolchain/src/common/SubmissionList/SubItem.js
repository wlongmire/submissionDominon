import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default class SubItem extends React.Component {
  getButtonConfiguration(buttonType) {
    switch (buttonType) {
      case ("status"):
        return (
          <div className="editButtonContainer col-3 d-flex flex-column justify-content-around">
            <div className="status">READY TO SUBMIT</div>
            <button className="editButton">EDIT</button>
            <button className="dismissButton">DISMISS</button>
          </div>
        )
      case ("acceptance"):
        return (
          <div className="editButtonContainer col-3 d-flex flex-column justify-content-around">
            <button className="editButton">Accepted</button>
            <button className="dismissButton">Not this time</button>
          </div>
        )
    }

  }

  render() {
    let { title, closeDate, tags, submitURL, journalURL, id } = this.props.item;
    let { buttonType = "status" } = this.props;

    return (<div className="subItem">
      <div>
        <span className="closeTime d-block">Closes {closeDate.fromNow()}</span>
        <div className="row detailsContainer">
          <div className="details col-9">

            <a href={submitURL} target="_blank" ><h1>{title}</h1></a>
            <div className="d-flex w-100 links">
              <a className="pr-2" href={journalURL} target="_blank">journal link</a>
              <a className="pr-2" href={submitURL} target="_blank" >submission link</a>
            </div>

            <div className="tags">
              {
                tags.slice(0, 3).map(t => (
                  <span className="badge badge-info">{t}</span>
                ))
              }
              {
                (tags.length > 4 && <a href="#">
                  <span className="moreBadge badge badge-info">
                    <i class="fas fa-ellipsis-h"></i>
                  </span>
                </a>)
              }
            </div>
          </div>

          {this.getButtonConfiguration(buttonType)}
        </div>
      </div>

    </div>);
  }
}