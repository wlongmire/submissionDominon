import React from 'react';
import { Route } from 'react-router-dom';
import ViewSub from './ViewSub';
import ViewSelect from './ViewSelect';
import './style.css';

let View = ({ match }) => {
  return (
    <div>
      {
        (match.params.id) ? <ViewSub id={match.params.id} /> : <ViewSelect />
      }
    </div>
  );
};

export default View;