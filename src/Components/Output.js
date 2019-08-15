import React, { Component } from 'react';

class Output extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: props.value
        }
    }

    render(){
        return (
            <div className="container">
                <div className="textContainer">
                    {this.props.value}
                </div>
            </div>
        )
    }
}

export default Output;