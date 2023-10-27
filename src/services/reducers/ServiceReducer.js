import {ADD_SERVICE_DATA} from '../constants'
const initialState = {
    serviceData:[]
}

export default function servicedata(state = initialState,action){
    switch (action.type) {
        case ADD_SERVICE_DATA:
            return {
                ...state,
                serviceData:action.data
            }
        default:
            return{
                ...state
            }
    }
} 