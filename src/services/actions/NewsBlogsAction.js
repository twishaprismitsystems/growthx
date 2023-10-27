import axios from 'axios'
import {ADD_NEWSBLOG_DATA, ADD_POSTS_DATA} from '../constants'

export const newsblogAction = () => {
    let data = [];
    return(dispatch) =>{
        axios.get('Data.php?file=blogs').then((res)=>{
            data = res.data.blogs;
            dispatch({
                type:ADD_NEWSBLOG_DATA,
                data:data
            })
        });
    }
    
}

export const postsAction = (page) => {
    let data = [];
    return(dispatch) =>{
        axios.get('Post.php?page='+page).then((res)=>{
            data = res.data.posts;
            dispatch({
                type:ADD_POSTS_DATA,
                data:data,
                page:page
            })
        });
    }
    
}