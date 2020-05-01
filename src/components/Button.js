//this creates a single button 
import React from 'react';

const style={
    width:"50px",
    height:"50px",
    margin:'2px',
    padding:'5px'
}

class Button extends React.Component{
    
    render(){
        // console.log(this.props)
        return (
            // <button> {this.props.value} </button>
            <button 
                onClick={e=>{this.props.onClick(e)}} 
                value={this.props.value}
                style={style}> 
                    {this.props.value} 
                </button>
        )
    }
}

export default Button;