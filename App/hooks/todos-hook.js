import { useReducer, useCallback } from "react"
import { fetch } from "../axios/axios/axios"
import { validateInput } from "../helper/inputValidator"
import { getLocalData } from "../util/storeLocal"

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, loading: true }
        case 'LOADED':
            return { ...state, loading: false, todos: action.todos }
        case 'SET_VALUE':
            return {
                ...state,
                inputs:
                {
                    ...state.inputs,
                    [action.input]:
                    {
                        ...state.inputs[action.input],
                        value: action.value,
                        valid: validateInput(action.input, action.value)
                    }
                }
            }
        case 'INSERTING':
            return { ...state, inserting: true }
        case 'INSERTED':
            return { ...state, inserting: false, inserted: true }
        case 'RESET':
            return { ...state, inserted: false, inputs: { ...initialState.inputs } }
        default:
            return state
    }
}

const initialState = {
    inputs: {
        name: {
            value: '',
            valid: false,
        },
        date: {
            scheduled: false,
            value: null,
        },
        color: {
            value: ''
        }
    },
    todos: []
}

const TodosHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const gettodos = useCallback(async (ID, type) => {
        dispatch({ type: 'LOADING' })
        const token = await getLocalData('token')
        const result = await fetch(`todos?token=${token}&ID=${ID}&type=${type}`, 'GET')
        if (result.error) dispatch({ type: 'LOADED', todos: [] })
        dispatch({ type: 'LOADED', todos: result.data })
    }, [])

    const insertTodo = useCallback(async (ID) => {
        dispatch({ type: 'INSERTING' })
        console.log('STATE', state)
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
        dispatch({ type: 'LOADED', todos: todos.data })
    }, [state])

    const deleteTodo = useCallback(async (ID, todoID) => {
        const result = await fetch('deletetodo', 'POST', { todoID: todoID })
        console.log(result)
        const token = await getLocalData('token')
        const todos = await fetch(`todos?token=${token}&ID=${ID}`, 'GET')
        dispatch({ type: 'LOADED', todos: todos.data })
    }, [])

    const setValue = useCallback((value, input) => {
        dispatch({ type: 'SET_VALUE', value: value, input: input })
    }, [])

    const reset = useCallback(() => dispatch({ type: 'RESET' }), [])

    return {
        todos: state.todos,
        loading: state.loading,
        inputs: state.inputs,
        gettodos: gettodos,
        insertTodo: insertTodo,
        inserting: state.inserting,
        inserted: state.inserted,
        setValue: setValue,
        resetInputs: reset,
        deleteTodo : deleteTodo
    }
}

export default TodosHook