import { connect } from "react-redux";
import Plan from '../components/Plan'
import {planAction} from '../services/actions/PlanAction'

const mapStateToProps = state => ({
    plandata:state.planReducer.planData
})

const mapDispatchToProps = dispatch => ({
    AddPlanHandler : () => dispatch(planAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(Plan);