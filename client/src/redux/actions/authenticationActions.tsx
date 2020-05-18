import { authentication } from '../actionTypes'
import axios from '../../config/axiosConfig'
import { returnErrors } from './errorActions'

export const registerUserAction = (username: string, password: string, success: Function, error: Function) => (dispatch: any) => {
    axios
        .post('/authentication/register', { username, password })
        .then(res => {
            dispatch({
                type: authentication.REGISTER_SUCCESS,
                payload: res
            })
            success()
        })
        .catch(err => {
            dispatch({
                type: authentication.REGISTER_FAIL,
                payload: err
            })
            dispatch(returnErrors(err))
            error()
        })
}

export const loginUserAction = (username: string, password: string, success: Function, error: Function) => (dispatch: any) => {
    axios
        .post('/authentication/login', { username, password })
        .then(res => {
            dispatch({
                type: authentication.LOGIN_SUCCESS,
                payload: res.data.data
            })
            success()
        })
        .catch(err => {
            dispatch({
                type: authentication.LOGIN_FAIL,
                payload: err
            })
            dispatch(returnErrors(err))
            error()
        })
}

// export const tokenConfig = (getState) => {
//     // Get access token from the state in authenticationReducer
//     const accessToken = getState().authentication.accessToken
    
//     const config = {
//         headers: {
//             'Content-type': 'application/json'
//         }
//     }

//     // Add the access token to the header
//     if (accessToken) {
//         config.headers['authorization'] = accessToken
//     }
    
//     return config
// }