import React from 'react';
import KeyPad from './KeyPad';
import Display from './Display';

class App extends React.Component{
  onClick = ()=>{
    console.log('button is pressed');
  }

  state={
    result:'',
    evaluated: false
  }

  onClick=(e)=>{

      console.log(this.state)
      switch(e.target.value){
        case '+':
        case '-':
        case '/':
        case '*':
          this.setState({
            result:this.state.result+ e.target.value,
            evaluated:false
          })  
          break;
        default:
          if(this.state.evaluated){
            this.setState({
              result:e.target.value,
              evaluated:false
            })
          }else{
            this.setState({
              result:this.state.result+e.target.value
            })
          }
      }
      
  }

  calculate= ()=>{
    
    try {
      let checkResult = eval(this.state.result);
      this.setState({
        result:checkResult,
        evaluated:true
      })
    }catch(e){
      this.setState({
        result:"Error",
        evaluated:true
      })
    }

    
  }

  backSpace = ()=>{
    // remove last element from the string
    this.setState({
      result:this.state.result.slice(0,-1)
    })
  }

  clearInput = ()=>{
    //clear input field
    this.setState({
      result:''
    })
  }

  render(){
    return (
      <div>
        <h1> Calculator App </h1>
        <Display result ={this.state.result} onClick={this.onClick}/>
        <br/>
        <KeyPad 
          onClick={this.onClick} 
          calculate={this.calculate} 
          backSpace={this.backSpace}
          clearInput = {this.clearInput}/>
      </div>
    );
  }
  
}

export default App;