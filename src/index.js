//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//eslint-disable-next-line
function getButtonText(params) {
    return "Click On Me!";
}

function getTime() {
    return (new Date()).toLocaleTimeString()
}

//Create a react component
const App = function () {
    const buttonText = { Text1: "Click1", Text2: "Click2"};
    const labelText = "Enter name here: ";
    return <div>
    <label className="label" htmlFor="name">
        {labelText}
    </label>
    <input id="name" type="text"/>
    <button style={{border: "1px solid red", backgroundColor: "blue", color: "white"}}>
        {buttonText.Text2}
    </button>
    <div>
        Current Time:
    </div>
    <h3>{getTime()}</h3>
  </div>
}

//Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)