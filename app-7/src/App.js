import React, {Component} from 'react';
import './App.css';
import NewTask from './Components/NewTask';
import List from './Components/List'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasksList: []
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task){
    this.setState({
      tasksList: [...this.state.tasksList, task],
    })
  }
  render(){
    return (
    <div className="App">
      <h1>My To-Do List:</h1>
      <NewTask add={this.handleAddTask}/>
      <List task={this.state.tasksList}/>
    </div>
  );
  }
}

export default App;

