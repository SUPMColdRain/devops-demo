export default (state = {list: [], page: 1, total: 0}, action) => {
    switch (action.type) {
        case 'USERCONFIG_LOADED':
            console.log('reducers action = ', action);
            return {
                ...state,
                list: action.payload.data,
                page: action.payload.page,
                total: action.payload.total
            }
        default:
            return state
    }
}