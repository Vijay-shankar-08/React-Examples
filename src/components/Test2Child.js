import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Test2Child extends Component {
    
    render() {
        return (
            <div>
                <h1>money : {this.props.amount}</h1>
                <button onClick = {this.props.increment}>Next</button>
            </div>
        )
    }
}

Test2Child.defaultProps = {
    amount: 1000
}

Test2Child.propTypes = {
    amount    : PropTypes.number,
    increment : PropTypes.func,
}


export default Test2Child
