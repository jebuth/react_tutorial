import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {

  // App is the main component and state will be passed on to children as props
  state = {
    todos: [
      {
        id: 1,
        title: 'take out the trash',
        completed: true
      },
      {
        id: 2,
        title: 'wash car',
        completed: false
      },
      {
        id: 3,
        title: 'clean shoes',
        completed: false
      }
    ]
  }

  markComplete = (_id) =>{
    console.log(_id)
  }

  render() {
    
    return (
      <div className="App">
        {/* this was declared in the Component's state */}
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
