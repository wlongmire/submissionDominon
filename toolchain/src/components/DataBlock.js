import React from 'react';

export default class DataBlock extends React.Component {
  render() {
    let { title, subtitle, amount, color } = this.props.item;

    return (
      <div class="dataBlock col-sm-6 col-md-3 bg-primary text-white p-3 w-50">
        <div class="dataBlock-label">
          <span class="h5 w-100">{title}
            <span class="d-block h6">{subtitle}</span>
          </span>
        </div>

        <span class="dataBlock-number d-block display-1 text-center w-100">{amount}</span>
      </div>
    );
  }
}