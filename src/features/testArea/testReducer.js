import { createReducer } from "../../app/common/util/reducerUtils"
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants"

const initialState = {
    data: 0
}

const incrementCounter = (state) => {
    return {
        ...state,
        data: state.data + 1
    }
}   

const decrementCounter = (state) => {
    return {
        ...state,
        data: state.data - 1
    }
}

export default createReducer(initialState, {
    [INCREMENT_COUNTER] : incrementCounter,
    [DECREMENT_COUNTER] : decrementCounter
})

