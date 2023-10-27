import { connect } from "react-redux";
import Home from '../components/Home'
import {homeAction} from '../services/actions/HomeAction'

const mapStateToProps = state => ({
    homedata:state.homeReducer.homeData
})

const mapDispatchToProps = dispatch => ({
    AddHomeHandler : () => dispatch(homeAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);