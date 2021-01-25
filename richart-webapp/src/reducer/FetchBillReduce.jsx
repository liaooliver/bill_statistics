/* eslint-disable import/no-anonymous-default-export */
export default (state, { type, payload }) => {
    switch (type) {
        case 'SUCCESS_FETCH':
            return {
                isloading: false,
                isError: false,
                message: "",
                payload: payload
            };
        case 'FAIL_FETCH': 
            return {
                isloading: false,
                isError: false,
                message: payload,
                payload: null
            }
        default: return state;
    };
};