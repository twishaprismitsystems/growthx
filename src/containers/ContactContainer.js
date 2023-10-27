import { connect } from "react-redux";
import Contact from '../components/Contact'
import {contactAction} from '../services/actions/ContactAction'

const mapStateToProps = state => ({
    contactdata:state.contactReducer.contactData
})

const mapDispatchToProps = dispatch => ({
    AddContactHandler : () => dispatch(contactAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(Contact);