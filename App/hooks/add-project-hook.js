import { useReducer } from "react"

const reducer = (state, action) =>{
    switch (action.type) {
        default:
            return state
    }
}


const ProjectHook = ( ) =>{
    const [ state, dispatch ] = useReducer(reducer, {})
    return {
        state : state
    }
}

export default ProjectHook