import { authentication } from '../actionTypes'
import { history } from '../../config/history'
import axios from 'axios'
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