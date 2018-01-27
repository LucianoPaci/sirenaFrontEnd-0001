import React, {Component} from 'react';

export class Button extends Component{


    constructor (props, ctx) {
        super(props, ctx)
        this.state = {
            lastEvent : null
        }
    }

    handleEvent (event) {
        const currentEventName = event.type
        this.setState({lastEvent : currentEventName})
    }
    render (){

        const handleEvent = (event) => {this.handleEvent(event)}
        return <button
            onClick = {handleEvent}
            onMouseEnter = {handleEvent}
            onMouseLeave = {handleEvent}
            onFocus = {handleEvent}
            >{this.state.lastEvent || this.props.children}</button>
    }
}
export class CheckedButton extends Component{

    constructor (props, ctx) {
        super(props,ctx)
        this.state = {
            isChecked : false
        }
    }

    handleCheckEvent (event){
        const checked = this.state.isChecked
        const newChecked = !this.state.isChecked
       this.setState({
        isChecked : newChecked
    })
    }
    render (){

        const handleCheckEvent = (event) => {this.handleCheckEvent(event)}
        return <button 
            onClick = {handleCheckEvent}
            className = {this.state.isChecked ? "button-primary" : ""}
        >
            className
        </button>
    }
}
export class HoverButton extends Component{

    render (){
        return <button>{this.props.children}</button>
    }
}
export class CounterButton extends Component{

    render (){
        return <button>0</button>
    }
}