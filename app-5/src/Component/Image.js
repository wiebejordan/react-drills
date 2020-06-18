import React, {Component} from 'react';

class Image extends Component{
  

  render(){
    return(
      <div className = 'photo'>
        <img src={`${this.props.url}`} alt='Decker' />
        <div>Only I Can Save The World</div>
      </div>
    )
  }













}
export default Image;