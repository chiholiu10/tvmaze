export const types = {
    GET_DATA: 'GET_DATA'
}

export const getData = (data) => {
    return {
        type: types.GET_DATA,
        data
    }
}
