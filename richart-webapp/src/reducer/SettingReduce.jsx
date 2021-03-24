/* eslint-disable import/no-anonymous-default-export */
export default (state, { type, payload }) => {
    switch (type) {
        case 'SUCCESS_FETCH':
            return [ ...state, payload];
        case 'FAIL_FETCH':
            return [];
        case 'RELOAD_FETCH': 
            return [...state, payload]
        default: return state;
    };
};