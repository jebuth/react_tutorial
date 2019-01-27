import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
     return {
       background: '#f4f4f4',
       padding: '10px',
       borderBottom: '1px #ccc dotted',
       textDecoration: this.props.todo.completed ? 'line-through' : 'none'
     }
  
  }

  render() {

    const {id, title} = this.props.todo;

    return (
      <div style={this.getStyle()}>
          <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> 
            {/* this is passed from Todo component as a prop and 
                received here as a prop. it is only a state of the parent component. */}
            {title}
            <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
          </p>
      </div>
    )
  }
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

// Prop-types (good practice?)
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}



export default TodoItem
