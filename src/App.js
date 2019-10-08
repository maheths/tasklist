import React, { Component } from 'react';
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      
      {
        id: 1,
        title: "Get up early",
        Completed: false,
      },
      {id: 2,
      title: "Go to school",
      completed: false,
      },
      {
        id: 3,
        title: "Take your dog out",
        completed: true,
      }
      ]
  }
  
  render() {
    return (
      <div className="App">
      
      <h1> Quick Task List </h1>
            <Todos todos={ this.state.todos } />
            </div>
      
    );
  }
}

export default App;
