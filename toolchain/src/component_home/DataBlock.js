import React from 'react';

export default class DataBlock extends React.Component {
  render() {
    let { title, subtitle, amount } = this.props.item;

    return (
      <div className="dataBlock col-12 d-flex justify-content-space-between">
        <div className="dataBlock-label w-50 text-center d-flex justify-content-center align-items-center">
          {title}
        </div>

        <div className="dataBlock-number w-50 text-center d-flex justify-content-center align-items-center">
          {amount}
        </div>
      </div>
    );
  }
}