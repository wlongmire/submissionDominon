import React from 'react';
import { Link } from 'react-router-dom';
import CONSTANTS from './../../constants';
import TagList from './TagList';

import './style.css';

const SubItemClose = (props) => {
  let { title, closeDate, tags, submitURL, journalURL, id } = props.item;

  return (<div className="subItem">
    <div>
      <span className="closeTime d-block">Closes {closeDate.fromNow()}</span>
      <div className="row detailsContainer">
        <div className="details col-12">

          <div className="d-flex justify-content-between align-items-start">
            <a href={submitURL} target="_blank"><h1 className="title">{title.slice(0, CONSTANTS.SUB_LIST.TITLE_MAX_WIDTH) + ((title.length > CONSTANTS.SUB_LIST.TITLE_MAX_WIDTH) ? "..." : "")}</h1></a>
            <div>
              <div className="status">READY TO SUBMIT</div>
            </div>
          </div>

          <div className="d-flex w-100 links">
            <a className="pr-2" href={journalURL} target="_blank">journal link</a>
            <a className="pr-2" href={submitURL} target="_blank" >submission link</a>
          </div>

          <div className="d-flex justify-content-between align-items-end">
            <TagList tags={tags} />
            <button class="btn btn-dark">EDIT</button>
          </div>
        </div>
      </div>
    </div>

  </div>);
}

export default SubItemClose;

// <div className="editButtonContainer col-3 d-flex flex-column justify-content-around">
//           <button className="editButton">EDIT</button>
//           <button className="dismissButton">DISMISS</button>
//         </div>