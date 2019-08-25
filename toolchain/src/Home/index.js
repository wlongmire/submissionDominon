import React from 'react';
import moment from 'moment';
import uuidv1 from 'uuid/v1';

import UpcomingSubs from './UpcomingSubs';
import InfoSection from './InfoSection';

export default class Home extends React.Component {
  render() {
    let subs = [
      {
        id: uuidv1(),
        title: "Title 1",
        closeDate: moment().add(1, 'days'),
        tags: ["Poetry", "Black"],
        submitURL: "https://www.google.com",
        journalURL: "https://www.theverge.com"
      },
      {
        id: uuidv1(),
        title: "Title 2",
        closeDate: moment().add(2, 'days'),
        tags: ["Poetry", "Black"],
        submitURL: "https://www.google.com",
        journalURL: "https://www.theverge.com"
      },
      {
        id: uuidv1(),
        title: "Title 3",
        closeDate: moment().add(3, 'days'),
        tags: ["Poetry", "Black"],
        submitURL: "https://www.google.com",
        journalURL: "https://www.theverge.com"
      }
    ];

    let info = [
      {
        title: "Accepted",
        subtitle: "so far this year",
        amount: 3
      },
      {
        title: "Rejected",
        subtitle: "so far this year",
        amount: 4
      },
      {
        title: "Waiting",
        subtitle: "for a response",
        amount: 5
      },
      {
        title: "Ready",
        subtitle: "to submit right now",
        amount: 6
      }
    ];

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