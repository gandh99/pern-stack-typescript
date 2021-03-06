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