import { authentication } from '../actionTypes'

const initialState = {
    accessToken: localStorage.getItem('accessToken'),
    isAuthenticated: false,
    userData: JSON.parse(localStorage.getItem('userData')!)
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case authentication.REGISTER_SUCCESS:
        case authentication.REGISTER_FAIL:
        case authentication.LOGIN_SUCCESS:
        case authentication.LOGIN_FAIL:
        default:
            return state
    }
}