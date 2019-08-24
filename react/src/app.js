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
let addOne = () => {
  count++;
  renderCounterApp();
}

let minusOne = () => {
  count--;
  renderCounterApp();
}

let reset = () => {
  count = 0;
  renderCounterApp();
}

var appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const template = <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>;

  ReactDOM.render(template, appRoot);
};

renderCounterApp();
