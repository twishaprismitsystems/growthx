import axios from 'axios'
import {ADD_HOME_DATA} from '../constants'

export const homeAction = () => {
    let data = [];
    return(dispatch) =>{
        axios.get('Data.php?file=home').then((res)=>{
            data = res.data.homepage;
            dispatch({
                type:ADD_HOME_DATA,
                data:data
            })
        });
    }
    
}