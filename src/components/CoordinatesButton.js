import React, { Component } from 'react'

export class CoordinatesButton extends Component {

    handleClick = (e) => {
        e.persist()
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }



    render() {
        return (
            <div>
            <button onClick={this.handleClick}/> 
            </div>
        )
    }
}

export default CoordinatesButton
