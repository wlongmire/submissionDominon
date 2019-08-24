import React from 'react';

export default class SubItem extends React.Component {
  render() {
    console.log(this.props);

    let { title, closeDate, tags, submitURL, journalURL } = this.props.item;
    return (<div class="subItem d-flex justify-content-between border p-3">

      <div className="subInfo w-75">
        <div className="d-flex justify-content-between align-items-baseline pr-2">
          <a href={journalURL} target="_blank">
            <span className="h5">{title}</span>
          </a>
          <a className="subLink" target="_blank" href={submitURL} >
            submit link
                </a>
        </div>

        <span className="closeTime d-block">Closes In
          <strong>{closeDate}</strong>
        </span>
        <div className="subTags">
          <span className="badge badge-info">{tags[0]}</span>
          <span className="badge badge-info">{tags[1]}</span>
        </div>
      </div>

      <button className="w-25 btn btn-primary">EDIT</button>
    </div>);
  }
}