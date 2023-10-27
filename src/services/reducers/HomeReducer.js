import {ADD_HOME_DATA} from '../constants'
const initialState = {
    homeData:[]
}

export default function homedata(state = initialState,action){
    switch (action.type) {
        case ADD_HOME_DATA:
            return {
                ...state,
                homeData:action.data
            }
        default:
            return{
                ...state
            }
    }
}