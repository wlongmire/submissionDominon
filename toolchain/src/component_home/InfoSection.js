import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DataBlock from './DataBlock';

class InfoSection extends React.Component {
  render() {
    let { information } = this.props;

    return (
      <div>
        <div className="row">
          {
            information.map((item, idx) => (
              <DataBlock key={idx} item={item} />
            ))
          }
        </div>
        <div className="text-right moreLink">
          <Link to="/submissions/stats">See More</Link>
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