import React, {Component} from 'react';

class Login extends Component {
  constructor(){
    super();
    
    this.state = {
      userName: '',
      passWord: '',
    }
    
    this.alertInputs = this.alertInputs.bind(this);
  }
  
  
  updateUserName(inputVal){
    this.setState({userName: inputVal});
  }
  
  updatePassWord(inputVal){
    this.setState({passWord: inputVal});
  }

  alertInputs(){
    alert(`Username: ${this.state.userName} Password: ${this.state.passWord}`);
  }
  render(){
    return (
      <div>
        <input onChange={(e) => this.updateUserName(e.target.value)} type='text'/>
        <input onChange={(e) => this.updatePassWord(e.target.value)} type='text'/>
        <button onClick={this.alertInputs}>Login</button>
      </div>
      
    );
  }
}

export default Login;