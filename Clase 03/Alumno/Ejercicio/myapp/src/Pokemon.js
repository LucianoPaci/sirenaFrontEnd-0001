import React, { Component } from 'react'


export class Pokemon extends Component {
    render(){
        return (
        <div className = "Pokemon">
        <h2>{this.props.name}</h2>
        <p>{this.props.weight} - {this.props.height}</p>
       </div>
        );
    }
};


    


