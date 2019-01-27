import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import axios from 'axios';

class App extends Component {

  // App is the main component and state will be passed on to children as props
  state = {
    todos: []
  }

  // make the initial request here - right after the component mounts
  componentDidMount(){

    // set the response data to our todos
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos: res.data}))

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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${_id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter
      (todo => todo.id !== _id)]}));
  }


  //add todo
  addTodo = (_title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: _title,
      completed: false      
    })
      .then(res => this.setState({todos: [...this.state.todos, res.data]}));
      //.then(res=> console.log(res.data));
  }

  render() {
    
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
                {/* this was declared in the Component's state */}
                <Todos todos={this.state.todos} 
                      markComplete={this.markComplete}
                      deleteTodo={this.deleteTodo} />
                  </React.Fragment>
          )}/>


          <Route path="/about" component={About}/>
          
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
