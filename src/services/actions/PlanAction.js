import axios from 'axios'
import {ADD_PLAN_DATA} from '../constants'

export const planAction = () => {
    let data = [];
    return(dispatch) =>{
        axios.get('Data.php?file=plan').then((res)=>{
            data = res.data.plan;
            dispatch({
                type:ADD_PLAN_DATA,
                data:data
            })
        });
    }
    
}