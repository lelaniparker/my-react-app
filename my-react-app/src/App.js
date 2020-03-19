import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // adding state:
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Steph', age: 26 },
      { name: 'Ed', age: 29 }
    ],
    anotherState: 'This state wont change'
  }

  // adding event handler:
  switchNameHandler = () => {
    // console.log('Button was clicked');
    // DO NOT MANIPULATE STATE DIRECTLY: this.state.persons[0].name = "Maximilian";

    // setState will update current state object with this new object:
    this.setState({
      persons: [
        { name: 'Maximiliam', age: 28 },
        { name: 'Steph', age: 26 },
        { name: 'Ed', age: 30 }
      ]
    })
  }

  // render method:
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Have fun creating apps with React!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello there'))
  }
}

export default App;
