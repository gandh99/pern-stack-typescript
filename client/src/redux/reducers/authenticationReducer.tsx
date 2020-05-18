import { authentication } from '../actionTypes'

const initialState = {
    accessToken: localStorage.getItem('accessToken'),
    isAuthenticated: false,
    userData: JSON.parse(localStorage.getItem('userData')!)
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case authentication.LOGIN_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isAuthenticated: true,
                userData: action.payload
            }
        case authentication.LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                userData: {}
            }
        case authentication.REGISTER_SUCCESS:
        case authentication.REGISTER_FAIL:
        default:
            return state
    }
}