import React from 'react';
import { Route } from 'react-router-dom';
import EditSub from './EditSub';
import './style.css';

let Edit = ({ match }) => {
  return (
    <div>
      <Route path={`${match.path}/:id`} component={EditSub} />
    </div>
  );
};

export default Edit;