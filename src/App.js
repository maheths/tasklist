import React, { Component } from 'react';
import Todos from "./components/Todos";
import { Box, Title } from 'reactbulma';
import "./App.css";

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
    const boxStyle = {
      display: "flex",
      background: "#FF3364",
      flexDirection: "column",
      justifyContent: "center",
      width: "500px",
    margin: "2% auto"
    }
    
    return (
      <div className="App">
      <Box style={boxStyle}>
      <Title style={{ color: "white", textAlign: "center"}}>Quick Task List </Title>
      </Box>
      
            <Todos todos={ this.state.todos } />
      
            </div>
      
    );
  }
}

export default App;
