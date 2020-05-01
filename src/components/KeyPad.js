// create keypad for calcualtor

import React from 'react';
import Button from './Button';
class KeyPad extends React.Component{
numbers = [0, 1,2,3,4,5,6,7,8,9]

render(){
    return (
      <>
        <Button value={"("}  onClick={this.props.onClick}/> { '   '}
        <Button value={")"} onClick={this.props.onClick}/>{ '   '}
        <Button value={"<--"}  onClick={this.props.backSpace}/> { '   '}
        <Button value={"clear"}  onClick={this.props.clearInput}/>
        <br/>
        <Button value={1} onClick={this.props.onClick}/>{ '   '}
        <Button value={2} onClick={this.props.onClick}/> {'   '}
        <Button value={3} onClick={this.props.onClick}/> {'   '}
        <Button value={"+"}  onClick={this.props.onClick}/>
        <br/>
        <Button value={4} onClick={this.props.onClick}/>{ '   '}
        <Button value={5} onClick={this.props.onClick}/>{'   '}
        <Button value={6} onClick={this.props.onClick}/> {'   '}
        <Button value={"-"}  onClick={this.props.onClick}/>
        <br/>
        <Button value={7} onClick={this.props.onClick}/>{ '   '}
        <Button value={8} onClick={this.props.onClick}/> {'   '}
        <Button value={9} onClick={this.props.onClick}/> {'   '}
        <Button value={"*"}  onClick={this.props.onClick}/>
        <br/>
        <Button value={"."}  onClick={this.props.onClick}/> { '   '}
        <Button value={0} onClick={this.props.onClick}/>{ '   '}
        <Button value={"/"}  onClick={this.props.onClick}/> { '   '}
        <Button value={"="}  onClick={this.props.calculate}/>
        
        <br/>
        

      </>
    );
    
}
}

export default KeyPad;