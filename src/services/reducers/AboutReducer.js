import {ADD_ABOUT_DATA} from '../constants'
const initialState = {
    aboutData:[]
}

export default function aboutdata(state = initialState,action){
    switch (action.type) {
        case ADD_ABOUT_DATA:
            return {
                ...state,
                aboutData:action.data
            }
        default:
            return{
                ...state
            }
    }
} 