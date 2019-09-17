// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{
    

     idk = (event) => {
         let array = []
         event.persist()
         array.push(event.clientX)
         array.push(event.clientY)
        this.props.onReceiveCoordinates(array)
    }

    render(){
        return (
            <button onClick={this.idk} ></button>
        )
    }
}