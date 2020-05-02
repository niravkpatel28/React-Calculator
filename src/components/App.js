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
      // console.log(typeof(checkResult)) // the result is a number
      this.setState({
        result:checkResult.toString(),
        evaluated:true
      })
    }catch(error){
      this.setState({
        result:"Error",
        evaluated:true
      })
    }

    
  }

  backSpace = ()=>{
    // remove last element from the string
    // Prevent backspace from editing the calcualted value
    // if evaluation is done, no changes can be made.
    if(!this.state.evaluated){
      this.setState({
        result:this.state.result.slice(0,-1)
      })
    } 
  }

  clearInput = ()=>{
    //clear input field
    this.setState({
      result:''
    })
  }

  directInput = (e)=>{
    // allow user to directly input mathematical expression
    this.setState({
      result:e.target.value
    })
  }
  render(){
    return (
      <div>
        <h1> Calculator App </h1>
        <Display 
          result ={this.state.result} 
          onClick={this.onClick}
          directInput={this.directInput}
          calculate={this.calculate}/>

        <br/>
        <KeyPad 
          onClick={this.onClick} 
          calculate={this.calculate} 
          backSpace={this.backSpace}
          clearInput={this.clearInput}
          />
      </div>
    );
  }
  
}

export default App;