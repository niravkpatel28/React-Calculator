import React from 'react';
const style={
    width:"220px",
    height:"40px",
    margin:"5px"
}

class Display extends React.Component{
    
    render(){
        // console.log(this.props)
        return(
            <input 
                value={this.props.result}  
                type="text" onChange={this.props.onClick}
                style={style}
                />
        )
    }
}

export default Display;