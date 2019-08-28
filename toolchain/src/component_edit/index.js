import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EditSub from './EditSub';
import EditSelect from './EditSelect';
import './style.css';

let Edit = ({ match }) => {
  return (
    <div>
      {
        (match.params.id) ? <EditSub id={match.params.id} /> : <EditSelect />
      }
    </div>
  );
};

export default Edit;