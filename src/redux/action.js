export const setUser = (data) => {
    return {
        type: 'setUser',
        payload: data,
    }
}

export const setToken = (data) => {
    return {
        type: 'setToken',
        payload: data,
    }
}