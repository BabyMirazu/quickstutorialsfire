const initialState = {
    user : null,
    token: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'setUser':
            return {...state, user: action.payload};
        case 'setToken':
            return {...state, token: action.payload};
        default:
            return state;
    }
}

export const getCurrentName = (state) => {
    if (state.reducer.user != null) {
        return state.reducer.user.name
    } else {
        return undefined;
    }
}

export default reducer;