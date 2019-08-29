import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DataBlock from './DataBlock';

class InfoSection extends React.Component {
  render() {
    let { information } = this.props;

    return (
      <div>
        <h4 className="border-bottom">Information</h4>

        <div className="row">
          {
            information.map((item, idx) => (
              <DataBlock key={idx} item={item} />
            ))
          }
          <div className="graph mt-2 d-flex w-100 justify-content-center align-items-center text-light bg-secondary">
            <h1>Graph</h1>
          </div>
        </div>
        <div className="text-center">
          <Link to="/submissions/stats">See All Stats</Link>
        </div>
      </div>
    );
  }
}

export default connect(({ information }) => {
  return {
    information
  }
})(InfoSection);