// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component{
    istilldk = (event) => {
        event.persist()
        // setTimeout(this.props.onDelayedClick(event), this.props.delay)
            setTimeout(() => {
        this.props.onDelayedClick(event);
        }, this.props.delay)
        }
    
    render(){
        return(
            <button onClick={this.istilldk}></button>
        )
    }
}