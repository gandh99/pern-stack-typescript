import { combineReducers } from 'redux'
import authentication from './authenticationReducer'
import error from './errorReducer'

export default combineReducers({
    authentication,
    error
})