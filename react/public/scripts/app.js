"use strict";

console.log("App.js is running!");

// var template = <div>
//   <h1>My App</h1>
//   <p>Put your life in the hands of a computer.</p>
//   <p>Here are your options.</p>
//   <ul>
//     <li>Item one</li>
//     <li>Item two</li>
//   </ul>
// </div>;

var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "reset"
    )
  );

  ReactDOM.render(template, appRoot);
};

renderCounterApp();
