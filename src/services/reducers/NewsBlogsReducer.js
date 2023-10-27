import {ADD_NEWSBLOG_DATA, ADD_POSTS_DATA} from '../constants'
const initialState = {
    newsblogData:[],
    postsData:[]
}

export default function newsblogdata(state = initialState,action){
    switch (action.type) {
        case ADD_NEWSBLOG_DATA:
            return {
                ...state,
                newsblogData:action.data
            }
        case ADD_POSTS_DATA:
            return {
                ...state,
                postsData: action.data.slice((action.page*4)-4,(action.page*4))
            }
        default:
            return{
                ...state
            }
    }
} 