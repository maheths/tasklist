import React, { Component } from "react";
import { Box } from 'reactbulma';

class Todos extends Component {
  render()
  
  {
  return this.props.todos.map((todo) => (
    <Box style={{display: "flex", width: "500px", margin: "2% auto", background: "whitesmoke" }}>
    <h2> { todo.title} </h2>
    </Box>
    ))
  }
  
  
}

export default Todos;