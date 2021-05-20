import React, { Component } from 'react'


const Button = (props) => (
    <button onClick={() => props.onClick()}>
        {props.text}
    </button>
)

class BtnPresent extends Component {
    onClick() {
        console.log("clicked")
    }
    render() {
        return (
            <div>
                <Button onClick={this.onClick} text="click here" />
            </div>
        )
    }
}

export default BtnPresent
