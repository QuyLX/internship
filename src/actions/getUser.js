import { LOAD_USER } from '../constants'
import API from '../utils/API';

export const loadUserData = () => async dispatch => {
    try {
        const res = await API.get('/', {
            params: {
                results: 1,
                inc: 'name,email,picture'
            }
        })
        dispatch({
            type: LOAD_USER,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
}