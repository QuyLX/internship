import { LOAD_USER } from '../constants'

const initialState = {
    user: null,
    loading: true,
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOAD_USER:
            return {
                ...state,
                user: payload,
                loading: false
            }
        default:
            return state;
    }
}