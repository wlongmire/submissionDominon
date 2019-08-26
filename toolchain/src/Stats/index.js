import React from 'react';
import classnames from 'classnames';
import './style.css';

export default class Stats extends React.Component {
  render() {
    let { tabId = "stats" } = this.props.match.params;

    return (
      <div className="container">
        <ul className="nav nav-tabs d-flex justify-content-between mt-4" id="statsTab" role="tablist">
          <li className="nav-item">
            <a className={classnames('nav-link', { 'active': (tabId === 'stats') })} id="stats-tab" data-toggle="tab" href="#stats" role="tab" aria-controls="home" aria-selected="true">Statistics</a>
          </li>
          <li className="nav-item">
            <a className={classnames('nav-link', { 'active': (tabId === 'subs') })} id="subs-tab" data-toggle="tab" href="#subs" role="tab" aria-controls="subs" aria-selected="false">Submissions</a>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
          <div className={classnames('tab-pane', 'fade', { 'show': (tabId === 'stats'), 'active': (tabId === 'stats') })} id="stats" role="tabpanel" aria-labelledby="stats-tab">
            Stats
        </div>
          <div className={classnames('tab-pane', 'fade', { 'show': (tabId === 'subs'), 'active': (tabId === 'subs') })} id="subs" role="tabpanel" aria-labelledby="subs-tab">
            Subs
        </div>
        </div>
      </div>
    );
  }
}