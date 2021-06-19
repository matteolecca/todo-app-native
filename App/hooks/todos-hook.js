import { useReducer, useCallback } from "react"
import { fetch } from "../axios/axios/axios"
import { getLocalData } from "../util/storeLocal"
import { projctsReducer } from './reducers/reducers'

const initialState = {
    inputs: {
        name: {
            value: '',
            valid: false,
            placeholder : 'Todo title'
        },
        date: {
            scheduled: false,
            value: null,
        },
        color: {
            value: ''
        }
    },
    todos: null
}

const TodosHook = () => {
    const [state, dispatch] = useReducer(projctsReducer, initialState)

    const gettodos = useCallback(async (ID, type) => {
        dispatch({ type: 'LOADING' })
        const token = await getLocalData('token')
        const result = await fetch(`todos?token=${token}&ID=${ID}&type=${type}`, 'GET')
        if (result.error) dispatch({ type: 'LOADED', data: [] })
        setTimeout(() => {
            dispatch({ type: 'LOADED', data: result.data })
        }, 1000);
    }, [])

    const insertTodo = useCallback(async (ID) => {
        dispatch({ type: 'INSERTING' })
        const result = await fetch('/todo', 'POST',
            {
                todo: {
                    title: state.inputs.name.value,
                    color: state.inputs.color.value,
                    important: false,
                    label: 'boh',
                    date: state.inputs.date.value
                }, ID: ID
            })
        if (result.error) console.log(error)
        dispatch({ type: 'INSERTED' })
        const token = await getLocalData('token')
        const todos = await fetch(`todos?token=${token}&ID=${ID}`, 'GET')
        dispatch({ type: 'LOADED', data: todos.data })
    }, [state])
    

    const deleteTodo = useCallback(async (ID, todoID) => {
        const result = await fetch('deletetodo', 'POST', { todoID: todoID })
        const token = await getLocalData('token')
        const todos = await fetch(`todos?token=${token}&ID=${ID}`, 'GET')
        dispatch({ type: 'LOADED', data: todos.data })
    }, [])

    const setValue = useCallback((value, input) => {
        dispatch({ type: 'SET_VALUE', value: value, input: input })
    }, [])

    const reset = useCallback(() => dispatch({ type: 'RESET' }), [])

    return {
        datas: state.data,
        loading: state.loading,
        inputs: state.inputs,
        getDatas: gettodos,
        insertData: insertTodo,
        inserting: state.inserting,
        inserted: state.inserted,
        setValue: setValue,
        resetInputs: reset,
        deleteData : deleteTodo
    }
}

export default TodosHook