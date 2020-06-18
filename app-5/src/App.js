import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Component/Image'

class App extends Component {
  

  render(){
    return(
      <div className='App'>
        <Image url={'https://decider.com/wp-content/uploads/2017/06/decker-tim-heidecker-interview.jpg?quality=80&strip=all&w=646&h=431&crop=1'}  />

      </div>
      
      
    )
  }

}

export default App;
