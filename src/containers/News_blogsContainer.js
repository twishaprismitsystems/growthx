import { connect } from "react-redux";
import News_blog from '../components/News_blogs'
import {newsblogAction, postsAction} from '../services/actions/NewsBlogsAction'

const mapStateToProps = state => ({
    newsblogdata:state.newsblogReducer.newsblogData,
    postdata:state.newsblogReducer.postsData,
})

const mapDispatchToProps = dispatch => ({
    AddNewsBlogHandler : () => dispatch(newsblogAction()),
    AddPostsHandler : (page) => dispatch(postsAction(page))
})

export default connect(mapStateToProps,mapDispatchToProps)(News_blog);