import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import moment from 'moment';

import configureStore from './store/configureStore';
import { addSub, removeSub } from './data_submissions/actions';
// import Navbar from './common/Navbar';
// import Home from './Home/index.js';
// import New from './New/index.js';
// import Edit from './Edit/index.js';
// import Stats from './Stats/index.js';

import './App.css';

const store = configureStore();
store.dispatch(addSub({
  title: "Sub new 1",
  closeDate: moment(),
  tags: ["black", "poetry"],
  submitURL: "http://www.theverge.com",
  jounralURL: "http://www.theverge.com"
}));

store.dispatch(addSub({
  title: "Sub new 2",
  closeDate: moment(),
  tags: ["black", "poetry"],
  submitURL: "http://www.theverge.com",
  jounralURL: "http://www.theverge.com"
}));

store.dispatch(addSub({
  title: "Sub new 3",
  closeDate: moment(),
  tags: ["black", "poetry"],
  submitURL: "http://www.theverge.com",
  jounralURL: "http://www.theverge.com"
}));

store.dispatch(removeSub(store.getState().submissions[0].id));
store.dispatch(removeSub(store.getState().submissions[0].id));

function App() {
  return (<h1>here</h1>);
  //     <div className="App">
  //       <Router>
  //         <Navbar />
  //         <Route exact path="/" component={Home} />
  //         <Route path="/new" component={New} />
  //         <Route path="/edit" component={Edit} />
  //         <Route path="/stats/:tabId" component={Stats} />
  //       </Router>
  //     </div>

  //   );
}

export default App;