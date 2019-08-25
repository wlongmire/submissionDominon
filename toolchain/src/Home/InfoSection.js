import React from 'react';
import DataBlock from './DataBlock';

export default class InfoSection extends React.Component {
  render() {
    let { info } = this.props;


    return (
      <div id="stats" className="col-sm-12 col-md-7 mt-2">
        <h4 className="border-bottom">Information</h4>

        <div className="row">
          {
            info.map((item, idx) => (
              <DataBlock key={idx} item={item} />
            ))
          }
          <div className="graph mt-2 d-flex w-100 justify-content-center align-items-center text-light bg-secondary">
            <h1>Graph</h1>
          </div>
        </div>

      </div>
    );
  }
}