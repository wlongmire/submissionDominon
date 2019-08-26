import React from 'react';

import UpcomingSubs from './UpcomingSubs';
import InfoSection from './InfoSection';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <UpcomingSubs subs={subs} />
          <InfoSection info={info} />
        </div>
      </div>
    );
  }
}