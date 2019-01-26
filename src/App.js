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
        completed: false
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

  // toggle complete
  markComplete = (_id) =>{
    this.setState({todo: this.state.todos.map(todo => {
      if(todo.id === _id){
        todo.completed = !todo.completed;
      }
    })});
  }

  // delete todo
  deleteTodo = (_id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== _id)]});
  }

  render() {
    
    return (
      <div className="App">
        {/* this was declared in the Component's state */}
        <Todos todos={this.state.todos} 
               markComplete={this.markComplete}
               deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
