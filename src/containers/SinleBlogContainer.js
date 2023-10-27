import { connect } from "react-redux";
import SingleBlog from '../components/Single_page_blog'
import {newsblogAction} from '../services/actions/NewsBlogsAction'

const mapStateToProps = state => ({
    newsblogdata: state.newsblogReducer.newsblogData
})

const mapDispatchToProps = dispatch => ({
    AddNewsBlogHandler : () => dispatch(newsblogAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(SingleBlog);