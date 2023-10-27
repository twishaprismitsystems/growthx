import { connect } from "react-redux";
import Service from '../components/Services'
import {serviceAction} from '../services/actions/ServiceAction'

const mapStateToProps = state => ({
    servicedata:state.serviceReducer.serviceData
})

const mapDispatchToProps = dispatch => ({
    AddServiceHandler : () => dispatch(serviceAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(Service);