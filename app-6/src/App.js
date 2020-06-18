import React, {Component} from 'react';
import './App.css';
import Todo from './Components/Todo';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasksList: [],
      input: ''
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleInputChange(value){
    this.setState({input: value});
  }

  handleAddTask(){
    this.setState({
      tasksList: [...this.state.tasksList, this.state.input],
      input:''
    })
  }
  render(){
    let list = this.state.tasksList.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

  return (
    <div className="App">
      <h1>My To-Do List:</h1>
      <div>

      <input 
        placeholder='Enter new task'
        value={this.state.input}
        onChange={e => this.handleInputChange(e.target.value)}
        />

      <button onClick={this.handleAddTask}>Add</button>
      </div>

      <br />
      {list}

    </div>
  );
  }
}

export default App;

