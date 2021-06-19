import { validateInput } from "../../helper/inputValidator"

export const projctsReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, loading: true }
        case 'LOADED':
            return { ...state, loading: false, data: action.data }
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
        case 'DELETING':
            return { ...state, deleting: true }
        case 'DELETED':
            return { ...state, deleting: false, deleted: true }
        case 'RESET':
            return { ...state, inserted: false,deleted: false, inputs: {} }
        default:
            return state
    }
}
