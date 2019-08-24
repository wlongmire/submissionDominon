import React from 'react';

export default class SubItem extends React.Component {
  render() {
    return (<div class="subItem d-flex justify-content-between border p-3">

      <div class="subInfo w-75">
        <div class="d-flex justify-content-between align-items-baseline pr-2">
          <a href="#">
            <span class="h5">American Poetry Review</span>
          </a>
          <a class="subLink" href="#">
            submit link
                </a>
        </div>

        <span class="closeTime d-block">Closes In
                <strong>FOUR DAYS</strong>
        </span>
        <div class="subTags">
          <span class="badge badge-info">Poetry</span>
          <span class="badge badge-info">Black</span>
        </div>
      </div>

      <button class="w-25 btn btn-primary">EDIT</button>
    </div>);
  }
}