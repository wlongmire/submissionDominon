import React from 'react';
import { Link } from 'react-router-dom';
import CONSTANTS from './../../constants';
import TagList from './TagList';

import './style.css';

const SubItemWait = (props) => {
  let { title, closeDate, submissionDate, tags, submitURL, journalURL, id } = props.item;

  return (<div className="subItem">
    <div>
      <span className="closeTime d-block">Submitted {submissionDate.fromNow()}</span>
      <div className="row detailsContainer">
        <div className="details col-12">

          <div className="d-flex justify-content-between align-items-center">
            <a href={submitURL} target="_blank"><h1 className="title">{title.slice(0, CONSTANTS.SUB_LIST.TITLE_MAX_WIDTH) + ((title.length > CONSTANTS.SUB_LIST.TITLE_MAX_WIDTH) ? "..." : "")}</h1></a>

            <div className="d-flex links">
              <a className="pr-2" href={journalURL} target="_blank">journal link</a>
              <a className="pr-2" href={submitURL} target="_blank" >submission link</a>
            </div>
          </div>

        </div>
        <div className="w-100 d-flex">
          <button className="btn btn-success flex-fill rounded-0">ACCEPTED</button>
          <button className="btn btn-danger flex-grow-2 rounded-0">Not Yet</button>
        </div>
      </div>
    </div>

  </div>);
}

export default SubItemWait;

// <div className="editButtonContainer col-3 d-flex flex-column justify-content-around">
//           <button className="editButton">EDIT</button>
//           <button className="dismissButton">DISMISS</button>
//         </div>