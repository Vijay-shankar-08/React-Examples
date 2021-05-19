import React, { Component } from 'react'

export const Button = props => {
    <button onClick = {() => props.onClick()}>
        {props.text}
    </button>
}

class Present extends Component {
    onClick() {
        console.log("button clicked")
    }
    render() {
        return (
            <Button onClick = {() => this.onClick()} text="Submit" />
        )
    }
}

export default Present
