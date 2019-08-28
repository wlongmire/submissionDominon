import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

let NewBasics = () => {

  return (
    <div className="container">
      <h1>Basics</h1>
      <form>
        <div className="form-group">
          <label htmlFor="titleInput">Journal Title</label>
          <input id="titleInput" type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="journalLinkInput">Journal Link</label>
          <input id="journalLinkInput" type="url" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="submissionLinkInput">Submission Link</label>
          <input id="submissionLinkInput" type="url" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="submissionLinkInput">Submission Link</label>
          <input id="submissionLinkInput" type="url" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="closeDateInput">Submission Link</label>
          <input id="closeDateInput" type="date" className="form-control" />
        </div>
      </form>
      <Link to={`/submissions/edit/2`}>
        <button type="submit" className="btn btn-primary btn-block">
          Create Submission
        </button>
      </Link>
    </div>
  );
}

export default NewBasics;