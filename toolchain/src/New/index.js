import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import NewBasics from './NewBasics';
import NewDetails from './NewDetails';
import './style.css';

let New = ({ match }) => {

  return (
    <div>
      <Route path={`${match.url}/basics`} component={NewBasics} />
      <Route path={`${match.url}/details`} component={NewDetails} />
      <Redirect to={'/new/basics'} />
    </div>
  );
}

export default New;