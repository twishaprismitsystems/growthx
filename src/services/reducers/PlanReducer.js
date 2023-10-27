import {ADD_PLAN_DATA} from '../constants'
const initialState = {
    planData:[]
}

export default function plandata(state = initialState,action){
    switch (action.type) {
        case ADD_PLAN_DATA:
            return {
                ...state,
                planData:action.data
            }
        default:
            return{
                ...state
            }
    }
}