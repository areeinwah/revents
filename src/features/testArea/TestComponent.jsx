import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants'

class TestComponent extends Component {
    render() {
        const { data, increment, decrement } = this.props
        return (
            <Fragment>
                <h1>TestComponent</h1>
                <h3>The answer is : {data}</h3>
                <Button onClick={increment} positive content='Increment' />
                <Button onClick={decrement} negative content='Decrement' />
            </Fragment>
        )
    }
}

const actions = {
    increment: () => ({ type: INCREMENT_COUNTER }),
    decrement: () => ({ type: DECREMENT_COUNTER })
}

const mapState = (state) => {
    return {
        data: state.test.data
    }
}

export default connect(mapState, actions)(TestComponent)