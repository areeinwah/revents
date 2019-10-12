export const createReducer = (initialState, handlers) => {
    return (state=initialState, { type, payload }) => {
        const handler = handlers[type]
        return handler ? handler(state, payload) : state
    }
}