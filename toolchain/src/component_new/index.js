import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import NewBasics from './NewBasics';
import './style.css';

let New = ({ match }) => {

  return (
    <div>
      <Route path={`${match.url}`} component={NewBasics} />
    </div>
  );
}

export default New;