import { connect } from "react-redux";
import About from '../components/About'
import {aboutAction} from '../services/actions/AboutAction'

const mapStateToProps = state => ({
    aboutdata:state.aboutReducer.aboutData
})

const mapDispatchToProps = dispatch => ({
    AddAboutHandler : () => dispatch(aboutAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(About);