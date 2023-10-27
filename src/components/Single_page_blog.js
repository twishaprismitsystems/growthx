import axios from 'axios';
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Single_page_blog extends Component {

	constructor(){
		super();
		this.state = {
			post:[],
			pagedata:[],
			ispage:0,
			responsive: [{
				breakpoint: 1199,
				settings: {
				  slidesToShow: 2
				}
			  },
			  {
				breakpoint: 575,
				settings: {
				  slidesToShow: 1,
				  arrows: false
		
				}
			  }
			]
		}
	}

	componentDidMount(){
		axios.get('Post.php?slug='+this.props.match.params.slug).then((res)=>{
			if(res.data.posts.length !== 0 ){
				let data = res.data.posts;
				data.map((post) =>
					post.slug === this.props.match.params.slug ? this.setState({ post:post }) : this.setState({})
				)
			}
			else{
				axios.get('Data.php?file='+this.props.match.params.slug).then((res)=>{
					this.setState({ pagedata:res.data, ispage:1 })
				});
			}
		});
	}

    render(){
        return(
            <React.Fragment>
				{
					this.state.ispage === 1 && this.state.pagedata.length !== 0  ?
					<React.Fragment>
						<div className="  container-fluid  inner_page_head pt-100 theme_grd" id="particles-js">
							<div className="container">
								<div className="row ">
								<div className="breadcrumb_title">
									<h1> {this.state.pagedata.privacy_data.title} </h1>
								</div>
								</div>
							</div>
							</div>
							<div className=" container-fluid  mt-100 pb-100 ">
								<div className="container">
									<div className="heading text-center col-lg-8 col-md-10 col-sm-12 d-table mx-auto"  >
										<h2 className="heading_h2 text-center " dangerouslySetInnerHTML={{__html:this.state.pagedata.privacy_data.title}} />
										<p>{this.state.pagedata.privacy_data.content}</p>
									</div>
								</div>
							</div>
					</React.Fragment>
					:
					<React.Fragment>
                {/* <!--1# hero_section	--> */}
				<div className="  container-fluid  inner_page_head pt-100 theme_grd" id="particles-js">
				<div className="container">
					<div className="row ">
					<div className="breadcrumb_title">
						<h1> News & Blogs </h1>
						<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
						{/* {
                            this.props.newsblogdata.head_list.map((item,index) =>
                                <li key={index} className="breadcrumb-item"><a href={item.link}>{item.text}</a></li>
                            )
                        } */}
						</ol>
						</nav>
					</div>
					</div>
				</div>
				</div>

				<div className=" container-fluid mt-100 " >
				<div className="container">
					<div className="row ">
						<div className="blog_contain_col col-lg-8 col-md-7 col-sm-12 ">
							<div className="row">
								<div className="col-12 blog_single">
									<div className="blog_single_post">
										<h2 className="blog_post_title"><a href="#!"> {this.state.post.title} </a></h2>
										<div className="blog_post_meta_wrap">
												<div className="date_post">
													<i className="far fa-calendar-alt"></i> <span> {this.state.post.date} </span>
												</div>
												<span className="separator">|</span>
												<div className="author_post">
													<i className="far fa-user"></i> <a href="#!"> {this.state.post.author} </a>
												</div>
											
												<div className="blog_post_comment">
													<a href="single-page-blog.html#Post_comments">
													<span className="comment_counting">3</span>
													<span className="text_p">Comments</span>
													</a>
												</div>
											</div>
											
										<div className="blog_single_post_media">
											<img src={this.state.post.image+".png"} alt="" title="" className="img-responsive fit_img"/>
										</div>
										
										<div className="blog_single_post_content">
											<p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices</strong></p>
											<p>
											{this.state.post.content}
											<br/>
											<br/>
											Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.</p>
											
											<blockquote><p>
											<h2>“We provide creative solutions for your creative ideas.”</h2>
												<a href="#!" className="quote-author">By - George</a>
												
											</p></blockquote>
											<h4>Give us an idea that people want to spend time with</h4>
											<p>Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum.</p>
											
											
										</div>
									
									<div className="cate-n-share">
										<div className="post-cate">
											<a href="#!" className="cate_item">Marketing</a>
											<a href="#!" className="cate_item">SEO</a>
											<a href="#!" className="cate_item">PPC</a>
											<a href="#!" className="cate_item">SMM</a>
										</div>
										
										<ul className="nav social_links">
											<li className="social_item"><a href="!#" className="fab fa-facebook-f fb"> </a></li>
											<li className="social_item"><a href="!#" className="fab fa-twitter twt"> </a></li>
											<li className="social_item"><a href="!#" className="fab fa-pinterest-p pin"> </a></li>
											<li className="social_item"><a href="!#" className="fab fa-instagram insta"> </a></li>
										</ul>
									</div>
									</div>
								</div>
								
							</div>
							
						</div>
						<div className="right_sidebar_col col-lg-4 col-md-5 col-sm-12 ">
							<div id="blog_search" className="  widget_search">
								<form id="widget_search_form">
									<input type="search" placeholder="Search..."/>
									<button type="reset" value="" className="sitebtn_2 btn"><i className="fas fa-search"></i></button>
								</form>
							</div>
							
							<div id="w_recent_post" className="widget_col  widget_recent_post">
								<div className="widget-title">
									<h4 className="widget-title_wrapper">What's New</h4>
									<span className="widget-title_after"></span>
								</div>
								<ul>
									<li className="rec-item">
									<a href="#!" className="rec-item-link">
										<div className="rc_post_thumb d_center">
											<img src="assets/img/blog/recent_post_1.png" alt="" title=""/>
										</div>
										<div className="rc_post_content">
										<h5>What is Google analytics</h5>
										<p><span className="rc_post_date">February 11, 2020</span></p>
										</div>
									</a>
								</li>
									
									<li className="rec-item ">
									<a href="#!" className="rec-item-link ">
										<div className="rc_post_thumb d_center">
											<img src="assets/img/blog/recent_post_2.png" alt="" title=""/>
										</div>
										<div className="rc_post_content">
										<h5>What is SEO</h5>
										<p><span className="rc_post_date">February 11, 2020</span></p>
										</div>
									</a>
								</li>
									
									<li className="rec-item 	">
									<a href="#!" className="rec-item-link 	">
										<div className="rc_post_thumb d_center">
											<img src="assets/img/blog/recent_post_4.png" alt="" title=""/>
										</div>
										<div className="rc_post_content">
										<h5>What is Digital Marketing</h5>
										<p><span className="rc_post_date">February 11, 2020</span></p>
										</div>
									</a>
								</li>

									<li className="rec-item 	">
									<a href="#!" className="rec-item-link 	">
										<div className="rc_post_thumb d_center">
											<img src="assets/img/blog/recent_post_3.png" alt="" title=""/>
										</div>
										<div className="rc_post_content">
										<h5>What is Content Writing</h5>
										<p><span className="rc_post_date">February 11, 2020</span></p>
										</div>
									</a>
								</li>
								</ul>
							</div>
							
							
							<div id="w_categories" className="widget_col  widget_categories">
								<div className="widget-title">
									<h4 className="widget-title_wrapper">Categories</h4>
									<span className="widget-title_after"></span>
								</div>
								<ul>
								<li className="cat-item cat-item-11">
									<a href="#!"><i className="far fa-hand-pointer"></i>Pay Per Click</a>
									<span className="post_count">3</span>
								</li>
									<li className="cat-item cat-item-11">
									<a href="#!"><i className="fab fa-searchengin"></i>SEO Marketing</a>
									<span className="post_count">6</span>
								</li>
									<li className="cat-item cat-item-11">
									<a href="#!"><i className="far fa-chart-bar"></i>Google Analytics</a>
									<span className="post_count">10</span>
								</li>
									<li className="cat-item cat-item-11">
									<a href="#!"><i className="far fa-file-image"></i>Social media Marketing</a>
									<span className="post_count">12</span>
								</li>
								</ul>
							</div>
							
							
							
							<div id="w_banner_ads" className="widget_col p-0 ">
								<a href="#!" className="d-block"><img src="assets/img/blog/banner.jpg" alt="" title="" className="img-fluid"/></a>
							</div>
							
						</div>
					
				<div className="col-lg-8 col-md-12 col-sm-12 single_post_comment_col mt-100" id="Post_comments">
						<h2 className="heading_h2 left_sep animate__ wow  animate__fadeInUp animated" >
							Comments  <span className="g_secondary" id="CommentCounting">(02)</span>
						</h2>
				<ol className="commentlist">
				<li className="comment_li" id="">
				<div id="" className="stand_comment">
					<div className="commentavatar">
					<img alt="" src="assets/img/about/avatr_1.png" className="avatar avatar-120 photo" height="120" width="120" title=""/> 
					</div>
				<div className="commentbody">

					
					<div className="comment_info">
						<div className="comment_author_says">
							<a href="#!" rel="" className="">MICHAEL BEAN</a>
						</div>
							<div className="meta-wrapper">
							<span>November 16, 2020</span>
							</div>
					</div>
					
					<div className="comment_content">
					<p>This is a useful post for finding broken links within the website, what about links pointing outwards that are broken? I can use a free web service but wondered if this was possible.</p>
					</div>
					
					<a rel="nofollow" className="comment-reply-link" href="#!" aria-label="Reply to MICHAEL BEAN">Reply</a>
					</div>
				</div>
					<ol className="reply_commentlist">
				<li className="comment_li" id="">
				<div id="" className="stand_comment">
					<div className="commentavatar">
					<img alt="" src="assets/img/about/avatr_2.png" className="avatar avatar-120 photo" height="120" width="120" title=""/> 
					</div>
				<div className="commentbody">

					
					<div className="comment_info">
						<div className="comment_author_says">
							<a href="#!" rel="" className="">MICHAEL BEAN</a>
						</div>
							<div className="meta-wrapper">
							<span>November 16, 2020</span>
							</div>
					</div>
					
					<div className="comment_content">
					<p>This is a useful post for finding broken links within the website.</p>
					</div>
					
					<a rel="nofollow" className="comment-reply-link" href="#!" aria-label="Reply to MICHAEL BEAN">Reply</a>
					</div>
				</div>
						</li>
						{/* <!-- #comment-## --> */}
					</ol>
				</li>
				{/* <!-- #comment-## --> */}
					
				<li className="comment_li" id="">
				<div id="" className="stand_comment">
					<div className="commentavatar">
					<img alt="" src="assets/img/about/avatr_1.png" className="avatar avatar-120 photo" height="120" width="120" title=""/> 
					</div>
				<div className="commentbody">

					
					<div className="comment_info">
						<div className="comment_author_says">
							<a href="#!" rel="" className="">MICHAEL BEAN</a>
						</div>
							<div className="meta-wrapper">
							<span>November 16, 2020</span>
							</div>
					</div>
					
					<div className="comment_content">
					<p>This is a useful post for finding broken links within the website, what about links pointing outwards that are broken? I can use a free web service but wondered if this was possible.</p>
					</div>
					
					<a rel="nofollow" className="comment-reply-link" href="#!" aria-label="Reply to MICHAEL BEAN">Reply</a>
					</div>
				</div>
				</li>
				{/* <!-- #comment-## -->	 */}
					
				{/* <!-- #comment-## --> */}
				</ol>
						
					</div>
					<div className="col-lg-4 col-md-12 col-sm-12 single_post_comment_from_col mt-100" id="Post_comments_from">
						<div className="single_post_comment_widget widget_col ">
							<div className="widget-title">
									<h4 className="widget-title_wrapper">Post a Comment</h4>
									<span className="widget-title_after"></span>
								</div>
							<form id="comments_from">
								<p className="form_field"><input type="text" name="name" placeholder="Name:" title="Please enter alphabet characters only" pattern="[A-Za-z ]+" minlength="3" maxLength="16" required/></p>
								<p className="form_field"><input type="email" name="email" placeholder="Enter Your Email:" required/></p>
								<p className="form_field"><input type="text" name="website" placeholder="Website:" title="Please enter Full Website Link e.g 'http://www.sample.com'" pattern='^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$'/></p>
								<p className="form_field"><textarea rows="8" placeholder="Message:" required></textarea></p>
								<p className="form_field">
									<label>
								<input className="form-check-input me-1" type="checkbox" value="" name="" aria-label="..."/>Save my name, email, and website</label></p>
								<button type="submit" value="" className="sitebtn_2 btn w-100"> Post Comment</button>
							</form>
						</div>
					</div>
					
					</div>
				</div>
				</div>

				<div className=" container-fluid  pt-100 mb-100" id="Newsnblogs" >
				<div className="container">
					<h2 className="heading_h2 left_sep animate__ wow  animate__fadeInUp  animated" >
						What's <span className="g_secondary">New</span>
					</h2>
					<div className="row ">
					<Slider responsive={this.state.responsive} autoplay={true} infinite={true} autoplaySpeed={2000} speed={1000} arrows={true} focusOnSelect={true} slidesToShow={3} slidesToScroll={1} dots={false} className="blog-slick">
					
						<div className="blog-col"> 
							<a href="#!" className="d-block">
								<div className="blog_thumbnail"> <img src="assets/img/blog/blog1.png" alt="blog" title="blog" className="thumbnail_img"/> </div>
								<div className="blog_content">
									<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
								</div>
							</a> 
						</div>
						<div className="blog-col"> <a href="#!" className="d-block">
						<div className="blog_thumbnail"> <img src="assets/img/blog/blog2.png" alt="blog" title="blog" className="thumbnail_img"/> </div>
						<div className="blog_content">
							<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
						</div>
						</a> </div>
						<div className="blog-col"> <a href="#!" className="d-block">
						<div className="blog_thumbnail"> <img src="assets/img/blog/blog3.png" alt="blog" title="blog" className="thumbnail_img"/> </div>
						<div className="blog_content">
							<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
						</div>
						</a> </div>
						<div className="blog-col"> <a href="#!" className="d-block">
						<div className="blog_thumbnail"> <img src="assets/img/blog/blog1.png" alt="blog" title="blog" className="thumbnail_img"/> </div>
						<div className="blog_content">
							<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
						</div>
						</a> </div>

					</Slider>
					</div>
				</div>
				</div>	

				<div className=" container-fluid pt-100" id="Contact">
				<div className="container">
					<div className="subscribe animate__ wow  animate__fadeInUp animated" >
					<div className=" text-center  d-table mx-auto">
						<h2 className="heading_h2 text-center ">We’ve Got a Solution <span className="g_secondary"> For You</span> </h2>
						<p className="	">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<form className="col-lg-10 col-md-10 col-sm-12 offset-1 " id="subscribe_form">
						<div className="row">
						<div className="col-lg-4 col-md-12 ">
							<input type="text" placeholder="Name" name="name" required=""/>
						</div>
						<div className="col-lg-5 col-md-12 ">
							<input type="emial" placeholder="Enter Your Email" name="emial" required=""/>
						</div>
						<div className="col-lg-3 col-md-12 ">
							<button type="submit" value="send" className="submit_btn btn">Submit</button>
						</div>
						</div>
					</form>
					</div>
				</div>
				</div>
				</React.Fragment>
				}
				
            </React.Fragment>
        )
    }
}

export default Single_page_blog