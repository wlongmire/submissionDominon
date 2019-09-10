import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { addSub } from './../data_submissions/actions';
import './style.css';

class NewBasics extends React.Component {
  state = {
    title: '',
    journalLink: '',
    subLink: '',
    description: '',
    closeDate: moment()
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  }

  onJournalLinkChange = (e) => {
    const journalLink = e.target.value;
    this.setState(() => ({ journalLink }));
  }

  onSubLinkChange = (e) => {
    const subLink = e.target.value;
    this.setState(() => ({ subLink }));
  }

  onCloseLinkChange = (e) => {
    const closeDate = e.target.value;
    this.setState(() => ({ closeDate: moment(closeDate) }));
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onSubmissionClick = (e) => {
    e.preventDefault();
    this.props.dispatch(addSub({ ...this.state, createdAt: moment() }));
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container fullscreen">
        <h1>Enter Journal Information</h1>
        <form>
          <div className="form-group">
            <label htmlFor="titleInput">Journal Title</label>
            <input onChange={this.onTitleChange} id="titleInput" value={this.state.title} type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="journalLinkInput">Journal Link</label>
            <input onChange={this.onJournalLinkChange} id="journalLinkInput" value={this.state.journalLink} type="url" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="submissionLinkInput">Submission Link</label>
            <input onChange={this.onSubLinkChange} id="submissionLinkInput" value={this.state.subLink} type="url" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="closeDateInput">Close Date</label>
            <input onChange={this.onCloseLinkChange} id="closeDateInput" value={this.state.closeDate.format("YYYY-MM-DD")} type="date" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="descriptionInput">Description</label>
            <textarea onChange={this.onDescriptionChange} id="descriptionInput" value={this.state.description} className="form-control" />
          </div>


        </form>
        <Link to={`/submissions/edit/2`}>
          <button onClick={this.onSubmissionClick} type="submit" className="btn btn-primary btn-block">
            Create Submission
          </button>
        </Link>
      </div>
    );
  }
}

export default connect()(NewBasics);