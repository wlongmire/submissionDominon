import React from 'react';

export default class InfoSection extends React.Component {
  render() {
    return (
      <div id="stats" class="col-sm-12 col-md-7 mt-2">
        <h4 class="border-bottom">Information</h4>

        <div class="row">
          <div class="dataBlock col-sm-6 col-md-3 bg-primary text-white p-3 w-50">
            <div class="dataBlock-label">
              <span class="h5 w-100">Accepted
                <span class="d-block h6">so far this year</span>
              </span>
            </div>

            <span class="dataBlock-number d-block display-1 text-center w-100">
              3
            </span>
          </div>

          <div class="dataBlock col-sm-6 col-md-3 bg-danger text-white p-3 w-50">
            <div class="dataBlock-label">
              <span class="h5 w-100">Rejected
                <span class="d-block h6">so far this year</span>
              </span>
            </div>

            <span class="dataBlock-number d-block display-1 text-center w-100">
              3
            </span>
          </div>

          <div class="dataBlock col-sm-6 col-md-3 bg-secondary text-white p-3 w-50">
            <div class="dataBlock-label">
              <span class="h5 w-100">Waiting
                <span class="d-block h6">for a response</span>
              </span>
            </div>

            <span class="dataBlock-number d-block display-1 text-center w-100">
              3
            </span>
          </div>

          <div class="dataBlock col-sm-6 col-md-3 bg-info text-white p-3 w-50">
            <div class="dataBlock-label">
              <span class="h5 w-100">Ready
                <span class="d-block h6">to submit right now</span>
              </span>
            </div>

            <span class="dataBlock-number d-block display-1 text-center w-100">
              3
            </span>
          </div>

          <div class="graph mt-2 d-flex w-100 justify-content-center align-items-center text-light bg-secondary">
            <h1>Graph</h1>
          </div>
        </div>

      </div>
    );
  }
}