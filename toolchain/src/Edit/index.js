import React from 'react';
import { Route } from 'react-router-dom';
import EditSub from './EditSub';
import EditSelect from './EditSelect';
import './style.css';

let Edit = ({ match }) => {
  return (
    <div>
      <Route exact path={match.path} component={EditSelect} />
      <Route path={`${match.path}/:id`} component={EditSub} />
    </div>
  );
};

export default Edit;