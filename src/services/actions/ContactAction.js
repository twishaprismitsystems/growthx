import axios from 'axios'
import {ADD_CONTACT_DATA} from '../constants'

export const contactAction = () => {
    let data = [];
    return(dispatch) =>{
        axios.get('Data.php?file=contact').then((res)=>{
            data = res.data.contact;
            dispatch({
                type:ADD_CONTACT_DATA,
                data:data
            })
        });
    }
    
}