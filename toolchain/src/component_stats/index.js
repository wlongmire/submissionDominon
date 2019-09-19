import React from 'react';
import { Route } from 'react-router-dom';
import classnames from 'classnames';
import StatsSelect from './StatsSelect';
import StatsSub from './StatsSub';

import './style.css';

let Stats = ({ match }) => {
  return (
    <div className="container fullscreen">
      {
        (match.params.id) ? <StatsSub id={match.params.id} /> : <StatsSelect />
      }
    </div>
  );
};

export default Stats;