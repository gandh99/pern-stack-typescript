import { authentication } from '../actionTypes'
import { history } from '../../config/history'
import axios from 'axios'
import { returnErrors } from './errorActions'

export const registerUserAction = (username: string, password: string) => (dispatch: any) => {
    axios
        .post('/authentication/register', { username, password })
        .then(res => {
            console.info(res)
            dispatch({
                type: authentication.REGISTER_SUCCESS,
                payload: res
            })
        })
        .catch(err => {
            dispatch({
                type: authentication.REGISTER_FAIL,
                payload: err
            })
            dispatch(returnErrors(err))
            console.error(err)
        })
}