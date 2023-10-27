import axios from 'axios'
import {ADD_ABOUT_DATA} from '../constants'

export const aboutAction = () => {
    let data = [];
    return(dispatch) =>{
        axios.get('Data.php?file=about').then((res)=>{
            data = res.data.about;
            dispatch({
                type:ADD_ABOUT_DATA,
                data:data
            })
        });
    }
    
}