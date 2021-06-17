import { CHECKING_AUTH, LOGGED_IN, ERROR_LOGGING_IN, LOGGING_IN } from "./actions";
import { fetch } from '../axios/axios/axios'
import { loginInputs } from '../constants/inputs'
import { useCallback, useReducer } from 'react'
import { validateInput } from '../helper/inputValidator'
import { getLocalData, storeLocalData } from '../util/storeLocal'
import { createContext } from "react";
const reducer = (state, action) => {
    switch (action.type) {
        case CHECKING_AUTH:
            return { ...state, checking: true, logged: false, message: '' }
        case LOGGING_IN:
            return { ...state, logging: true, logged: false, message: '' }
        case ERROR_LOGGING_IN:
            return { ...state, checking: false, logged: false, checking: false, error: true, message: action.message }
        case LOGGED_IN:
            return { ...state, checking: false, error: false, logged: true, checking: false, user : action.user }
        default:
            return state
    }
}

const inputsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_VALUE':
            return { ...state, [action.input]: { ...state[action.input], value: action.value, valid: validateInput(action.value, action.input) } }
        default:
            return state
    }
}

const LoginHook = () => {
    const [state, dispatch] = useReducer(reducer, {checking : true})
    const [inputs, setInput] = useReducer(inputsReducer, loginInputs)

    const login = useCallback(async () => {
        console.log('CHECKING AUTH')
        dispatch({ type: LOGGING_IN })
        const result = await fetch('/login', 'POST', { email: inputs.email.value, password: inputs.password.value })
        if (result.error) return dispatch({ type: ERROR_LOGGING_IN, message: result.error.error })
        await storeLocalData('token', result.data.token)
        dispatch({ type: LOGGED_IN })
    }, [inputs])

    const checkAuth = useCallback(async () => {
        dispatch({ type: CHECKING_AUTH })
        const token = await getLocalData('token')
        const result = await fetch(`/checkauth/${token}`, 'GET')
        if(result.error)return dispatch({ type: ERROR_LOGGING_IN })
        dispatch({ type: LOGGED_IN, user : result.data.user })
    }, [])

    const setValue = (value, input) => {
        setInput({ type: 'SET_VALUE', value: value, input: input })
    }


    return {
        logging: state.logging,
        checking: state.checking,
        logged: state.logged,
        inputs: inputs,
        login: login,
        error: state.error,
        message: state.message,
        setValue: setValue,
        checkAuth: checkAuth,
        user : state.user
    }
}
export const AuthContext = createContext({ logged: false, setAuth: () => { }, barHidden : true, hideBar : ()=>{} })
export default LoginHook