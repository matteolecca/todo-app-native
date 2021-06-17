import { useReducer, useCallback } from "react"
import { fetch } from "../axios/axios/axios"
import { getLocalData } from "../util/storeLocal"

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, loading: true }
        case 'LOADED':
            return { ...state, loading: false, projects: action.projects, todos: action.todos }
        default:
            return state
    }
}

const ProjectsHook = () => {
    const [state, dispatch] = useReducer(reducer, { projects: [] })

    const getProjects = useCallback(async () => {
        dispatch({ type: 'LOADING' })
        const token = await getLocalData('token')
        const result = await fetch(`projects/${token}`, 'GET')
        if (result.error) return
        dispatch({ type: 'LOADED', projects: result.data.projects })
    }, [])

    const gettodos = useCallback(async (ID, type) => {
        dispatch({ type: 'LOADING' })
        const token = await getLocalData('token')
        let result = {}
        result = await fetch(`todos?token=${token}&ID=${ID}&type=${type}`, 'GET')
        if (result.error) dispatch({ type: 'LOADED', todos: [] })
        dispatch({ type: 'LOADED', todos: result.data })
    }, [])
   
    return {
        projects: state.projects,
        todos: state.todos,
        loading: state.loading,
        getProjects: getProjects,
        gettodos: gettodos
    }
}

export default ProjectsHook