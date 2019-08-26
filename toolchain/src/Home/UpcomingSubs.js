import React from 'react';
import { Link } from 'react-router-dom';
import SubItem from './SubItem';

export default class UpcomingSubs extends React.Component {
  render() {
    let { subs } = this.props;

    return (
      <div id="upcomingSubs" className="col-sm-12 col-md-5 mt-2">
        <h4 className="border-bottom">Upcoming Submissions</h4>

        <div className="subItems">
          {
            subs.map((item, idx) => (<SubItem key={idx} item={item} />))
          }
        </div>
        <div className="text-center">
          <Link to="/stats/subs">See All Submissions</Link>
        </div>
      </div>
    );
  }
}