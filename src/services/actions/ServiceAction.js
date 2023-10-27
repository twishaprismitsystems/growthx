import axios from 'axios'
import {ADD_SERVICE_DATA} from '../constants'

export const serviceAction = () => {
    let data = [];
    return(dispatch) =>{
        axios.get('Data.php?file=service').then((res)=>{
            data = res.data.service;
            dispatch({
                type:ADD_SERVICE_DATA,
                data:data
            })
        });
    }
    
}