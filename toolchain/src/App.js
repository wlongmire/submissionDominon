import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UpcomingSubs from './components/UpcomingSubs';
import InfoSection from './components/InfoSection';

function App() {
  let subs = [
    {
      title: "Title 1",
      closeDate: "FOUR DAYS",
      tags: ["Poetry", "Black"],
      submitURL: "https://www.google.com",
      journalURL: "https://www.theverge.com"
    },
    {
      title: "Title 2",
      closeDate: "FOUR DAYS",
      tags: ["Poetry", "Black"],
      submitURL: "https://www.google.com",
      journalURL: "https://www.theverge.com"
    },
    {
      title: "Title 3",
      closeDate: "FOUR DAYS",
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
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
          <UpcomingSubs subs={subs} />
          <InfoSection info={info} />
        </div>
      </div>
    </div>
  );
}

export default App;
