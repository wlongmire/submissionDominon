import React from 'react';
import DataBlock from './DataBlock';

export default class InfoSection extends React.Component {
  render() {
    let { info } = this.props;


    return (
      <div id="stats" class="col-sm-12 col-md-7 mt-2">
        <h4 class="border-bottom">Information</h4>

        <div class="row">
          {
            info.map(item => (
              <DataBlock item={item} />
            ))
          }
          <div class="graph mt-2 d-flex w-100 justify-content-center align-items-center text-light bg-secondary">
            <h1>Graph</h1>
          </div>
        </div>

      </div>
    );
  }
}