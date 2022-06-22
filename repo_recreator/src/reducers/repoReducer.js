const initialState = {
    all: [{ id:0,}]
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case "DISPLAY_ID":
            return { ...state, id: state.id + action.payload }
        default:
            return initialState;
    }
}

export default reducer;
