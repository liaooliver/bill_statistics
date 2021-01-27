/* eslint-disable import/no-anonymous-default-export */
export default (state, { type, payload }) => {
    switch (type) {
        case 'SUCCESS_FETCH':
            return {
                isloading: false,
                isError: false,
                message: "",
                payload: payload['result'],
                page: payload['page'],
                limit: payload['limit'],
                total: payload['total'],
                totalPage: payload['totalPage']
            };
        case 'FAIL_FETCH':
            return {
                isloading: false,
                isError: false,
                message: payload,
                payload: []
            };
        case 'RELOAD_FETCH': 
            return {
                ...state, isloading: true
            }
        default: return state;
    };
};