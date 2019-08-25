import React from 'react';
import { Link } from 'react-router-dom';

export default class SubItem extends React.Component {
  render() {
    let { title, closeDate, tags, submitURL, journalURL, id } = this.props.item;

    return (<div className="subItem d-flex justify-content-between border p-3">

      <div className="subInfo w-75">
        <div className="d-flex justify-content-between align-items-baseline pr-2">
          <a href={journalURL} rel="noopener noreferrer" target="_blank">
            <span className="h5">{title}</span>
          </a>
          <a className="subLink" rel="noopener noreferrer" target="_blank" href={submitURL}>submit link</a>
        </div>

        <span className="closeTime d-block">Closes
          <strong>{closeDate.fromNow()}</strong>
        </span>
        <div className="subTags">
          <span className="badge badge-info">{tags[0]}</span>
          <span className="badge badge-info">{tags[1]}</span>
        </div>
      </div>

      <Link to={`/edit/${id}`}>
        <button className="btn btn-primary">EDIT</button>
      </Link>
    </div>);
  }
}