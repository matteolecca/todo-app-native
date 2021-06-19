import { useReducer } from "react"

const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}


const AppearenceHook = () =>{
    const [ state, dispatch ] = useReducer(reducer,lightColors )
    const setAppearence = mode =>{
        dispatch({type : 'SET_APPEARENCE', colors : mode === 'dark' ? darkColors : lightColors})
    }
    return { 
        colors : 'red'
    }
}

const darkColors = {
    mainColor : '#fff',
    mainBackground : '#333',
    secondaryBackground : 'rgb(73, 73, 73)',
    tertiaryBackground : 'rgb(80, 80, 80)',
    appColor : '#f05633'
}
const lightColors = {
    mainColor : '#333',
    mainBackground : '#fff',
    secondaryBackground : 'rgb(250, 250, 250)',
    tertiaryBackground : 'rgb(235, 235, 235)',
    appColor : '#f05633'

}
