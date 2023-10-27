import { combineReducers } from "redux";
import homeReducer from '../reducers/HomeReducer'
import aboutReducer from '../reducers/AboutReducer'
import serviceReducer from '../reducers/ServiceReducer'
import planReducer from '../reducers/PlanReducer'
import newsblogReducer from '../reducers/NewsBlogsReducer'
import contactReducer from '../reducers/ContactReducer'


export default combineReducers({
    homeReducer,
    aboutReducer,
    serviceReducer,
    planReducer,
    newsblogReducer,
    contactReducer
});