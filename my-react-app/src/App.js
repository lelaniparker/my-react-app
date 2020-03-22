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
  switchNameHandler = (newName) => {
    // console.log('Button was clicked');
    // DO NOT MANIPULATE STATE DIRECTLY: this.state.persons[0].name = "Maximilian";

    // setState will update current state object with this new object:
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Steph', age: 26 },
        { name: 'Ed', age: 30 }
      ]
    })
  }

  // adding new event handler:
  onChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 26 },
        { name: 'Ed', age: 29 }
      ]
    })
  }

  // render method:
  render() {
    //adding inline styles:
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Have fun creating apps with React!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maximus')}>Switch Name </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "No just Max")}
          changed={this.onChangeHandler}>
          My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );

    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello there'))
  }
}

export default App;
