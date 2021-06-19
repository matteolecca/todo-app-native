import { useReducer, useCallback } from "react"
import { fetch } from "../axios/axios/axios"
import { getLocalData } from "../util/storeLocal"
import { projctsReducer } from './reducers/reducers'

const initialState = {
    inputs: {
        name: {
            value: '',
            valid: false,
            placeholder : 'Project name'
        },
        color: {
            value: ''
        }
    },
    todos: null
}

const TodosHook = () => {
    const [state, dispatch] = useReducer(projctsReducer, initialState)

    const getProjects = useCallback(async (ID, type) => {
        dispatch({ type: 'LOADING' })
        const token = await getLocalData('token')
        const result = await fetch(`projects/${token}`, 'GET')
        console.log(result)
        if (result.error) dispatch({ type: 'LOADED', data: [] })
        setTimeout(() => {
            dispatch({ type: 'LOADED', data: result.data.projects })
        }, 1000);
    }, [])

    const insertProject = useCallback(async () => {
        dispatch({ type: 'INSERTING' })
        const token = await getLocalData('token')
        const insertProj =  await fetch(`todolist`, 'POST', { 
            todolist:  {
                title : state.inputs.name.value, color : state.inputs.color.value,
            },
            token : token
        })
        if(insertProj.error) return dispatch({type : 'ERROR_INSERTING'})
        dispatch({type : 'INSERTED'})
        dispatch({type : 'LOADING'})
        const result = await fetch(`projects/${token}`, 'GET')
        if (result.error) dispatch({ type: 'LOADED', data: [] })
        dispatch({ type: 'LOADED', data: result.data.projects })
    }, [state])

    const deleteProject  = useCallback(async ID => {
        dispatch({ type: 'DELETING' })
        const token = await getLocalData('token')
        const deleted = await fetch('/deleteproject', 'POST', { ID : ID})
        if(deleted.error) console.log(deleted.error) 
        dispatch({type : 'DELETED'})
    },[])

    const setValue = useCallback((value, input) => {
        dispatch({ type: 'SET_VALUE', value: value, input: input })
    }, [])

    const reset = useCallback(() => dispatch({ type: 'RESET' }), [])

    return {
        datas: state.data,
        loading: state.loading,
        inputs: state.inputs,
        getDatas: getProjects,
        insertData: insertProject,
        inserting: state.inserting,
        inserted: state.inserted,
        deleting: state.deleting,
        deleted: state.deleted,
        setValue: setValue,
        resetInputs: reset,
        deleteData : deleteProject
    }
}

export default TodosHook