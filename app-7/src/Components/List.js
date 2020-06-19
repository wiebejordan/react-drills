import React, {Component} from 'react';
import Todo from "./Todo";

 class List extends Component {
  render(){
    let list = this.props.task.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

    return <div>{list}</div>
  }
}
export default List;