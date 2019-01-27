import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo.js'
import uuid from 'uuid';

class App extends Component {

  // App is the main component and state will be passed on to children as props
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'wash car',
        completed: false
      },
      {
        id: uuid.v4(),
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


  //add todo
  addTodo = (_title) => {
    console.log(_title);
    const newTodo ={
      id: uuid.v4(),
      title: _title, 
      completed: false
    }

    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    
  return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          {/* this was declared in the Component's state */}
          <Todos todos={this.state.todos} 
                markComplete={this.markComplete}
                deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
