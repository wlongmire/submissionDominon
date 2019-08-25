import React from 'react';

export default class DataBlock extends React.Component {
  render() {
    let { title, subtitle, amount } = this.props.item;

    return (
      <div className="dataBlock col-sm-6 col-md-3 bg-primary text-white p-3 w-50">
        <div className="dataBlock-label">
          <span className="h5 w-100">{title}
            <span className="d-block h6">{subtitle}</span>
          </span>
        </div>

        <span className="dataBlock-number d-block display-1 text-center w-100">{amount}</span>
      </div>
    );
  }
}