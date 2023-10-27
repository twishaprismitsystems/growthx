import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Loader from './Loader'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class News_blogs extends Component {

    constructor(props) {
        super(props);
        let fields = [];
        if (props.fields.fields !== 0) {
            fields = props.fields.fields
        }
        this.state = {
            fields: fields,
            index: 1
        }
    }

    componentDidMount() {
        this.props.AddNewsBlogHandler();
        this.props.AddPostsHandler(1);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getnewdata = this.getnewdata.bind(this);
    }

    getnewdata(e, index) {
        // e.preventDefault();
        // console.log(index);
        this.props.AddPostsHandler(index);
        this.setState({ index: index })
    }

    handleChange(event, index) {
        event.preventDefault();
        let fields = [...this.state.fields];
        fields[index] = { ...this.state.fields[index], value: event.target.value }
        this.setState({ fields: fields })
    }

    handleSubmit(event) {
        event.preventDefault();
        const isvalid = this.subValidateForm();
        if (isvalid) {
            let fields = [...this.state.fields];
            // console.log(fields);
            let data = new FormData();
            fields.map((item, index) =>
                data.append(item.name, item.value)
            )
            const url = "/control/subscribe.php";
            axios.post(url, data).then(response => {
                //console.log(response);
                this.setState({
                    message: response.data.message,
                    show: true
                });
            }).catch(error => {
                // console.log(error);
            })
        }
    }

    subValidateForm() {

        let suberrors = {};
        let formIsValid = true;
        let fields = [...this.state.fields];
        //console.log(fields[0]['value']);
        if (!fields[0]['value']) {
            formIsValid = false;
            suberrors["name"] = "*Please enter your username.";
        }

        if (typeof fields[0]['value'] !== "undefined") {
            if (!fields[0]['value'].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                suberrors["name"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields[1]['value']) {
            formIsValid = false;
            suberrors["email"] = "*Please enter your email-ID.";
        }

        if (typeof fields[1]['value'] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields[1]['value'])) {
                formIsValid = false;
                suberrors["email"] = "*Please enter valid email-ID.";
            }
        }

        this.setState({
            errors: suberrors
        });
        return formIsValid;


    }

    render() {
        return (
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

                {
                    this.props.newsblogdata.length !== 0 ?
                        <React.Fragment>
                            <div className=" container-fluid mt-100 " >
                                <div className="container">
                                    <div className="row ">
                                        <div className="blog_contain_col col-lg-8 col-md-7 col-sm-12 ">
                                            <div className="row">
                                                {
                                                    this.props.postdata.map((item, index) =>
                                                        <div key={index} className="col-xl-6 col-md-12 col-sm-6 col-12 blog_item">
                                                            <div className="blog_post">
                                                                <div className="blog-post_media">
                                                                    <picture className="d-block">
                                                                        <source srcSet={item.image + "_sm.webp"} media="(max-width:767px)" type="image/webp" />
                                                                        <source srcSet={item.image + ".webp"} media="(max-width:991px)" type="image/webp" />
                                                                        <source srcSet={item.image + "assets/img/blog/blog1.webp"} media="(max-width:992px)" type="image/webp" />
                                                                        <source srcSet={item.image + "_sm.png"} media="(max-width:767px)" type="image/png" />
                                                                        <source srcSet={item.image + "_md.png"} media="(max-width:991px)" type="image/png" />
                                                                        <source srcSet={item.image + ".png"} media="(max-width:992px)" type="image/png" />
                                                                        <LazyLoadImage effect="blur" src={item.image + ".png"} width="415" height="264" alt="Digital Marketing, Agency, Facebook Ads- GrowthX" title="Digital Marketing, Agency, Facebook Ads- GrowthX" className="img-responsive  fit_img" />
                                                                    </picture>
                                                                </div>
                                                                <div className="blog_post_content">
                                                                    <div className="blog_post_meta_wrap">
                                                                        <div className="date_post">
                                                                            <i className="far fa-calendar-alt"></i> <span>{item.date}</span>
                                                                        </div>
                                                                        <span className="separator">|</span>
                                                                        <div className="author_post">
                                                                            <i className="far fa-user"></i> <a href="#!">{item.author}</a>
                                                                        </div>
                                                                    </div>

                                                                    <h4 className="blog_post_title"><Link to={"/" + item.slug}>{item.title}</Link></h4>
                                                                    <p className="blog_post_text">{item.content}</p>

                                                                    <div className="blog_post_info_wrap">
                                                                        <div className="blog_post_comment">
                                                                            <a href="#Post_comments">
                                                                                <span className="comment_counting"> {item.comment_count} </span>
                                                                                <span className="text_p">Comments</span>
                                                                            </a>
                                                                        </div>
                                                                        <Link to={"/" + item.slug} className="read_more_btn sitebtn_2">
                                                                            Read More <i className="fas fa-angle-right"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>

                                            <ul className="wgl-pagination ">
                                                <li className="page">
                                                    <span aria-current="page" className={this.state.index === 1 ? "page-numbers current" : "page-numbers"} onClick={(e) => this.getnewdata(e, 1)}>1</span>
                                                </li>
                                                <li className="page">
                                                    <span aria-current="page" className={this.state.index === 2 ? "page-numbers current" : "page-numbers"} onClick={(e) => this.getnewdata(e, 2)}>2</span>
                                                </li>
                                                {/* <li className="page">
                                        <a className="next page-numbers" href="#!">
                                            <i className="fa fa-angle-right">
                                        </i></a>
                                    </li> */}
                                            </ul>
                                        </div>


                                        <div className="right_sidebar_col col-lg-4 col-md-5  col-sm-12">
                                            <div id="blog_search" className="  widget_search">
                                                <form id="widget_search_form">
                                                    <input type="search" placeholder="Search..." />
                                                    <button type="reset" value="" className="sitebtn_2 btn" ><i className="fas fa-search"></i></button>
                                                </form>
                                            </div>

                                            <div id="w_categories" className="widget_col  widget_categories">
                                                <div className="widget-title">
                                                    <h4 className="widget-title_wrapper">Categories</h4>
                                                    <span className="widget-title_after"></span>
                                                </div>
                                                <ul>
                                                    {
                                                        this.props.newsblogdata.categories.map((item, index) =>
                                                            <li key={index} className="cat-item cat-item-11">
                                                                <a href="#!"><i className={item.icon}></i> {item.title} </a>
                                                                <span className="post_count"> {item.post_count} </span>
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            </div>

                                            <div id="w_recent_post" className="widget_col  widget_recent_post">
                                                <div className="widget-title">
                                                    <h4 className="widget-title_wrapper">Recent post</h4>
                                                    <span className="widget-title_after"></span>
                                                </div>
                                                <ul>
                                                    {
                                                        this.props.newsblogdata.recent_posts.map((item, index) =>
                                                            <li key={index} className="rec-item">
                                                                <Link to={"/" + item.slug} className="rec-item-link">
                                                                    <div className="rc_post_thumb d_center">
                                                                        <LazyLoadImage effect="blur" src={item.image} alt="" title="" />
                                                                    </div>
                                                                    <div className="rc_post_content">
                                                                        <h5> {item.title} </h5>
                                                                        <p><span className="rc_post_date"> {item.date} </span></p>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            </div>

                                            <div id="w_banner_ads" className="widget_col p-0 ">
                                                <a href="#!" className="d-block">
                                                    <picture className="d-block">
                                                        <source srcSet={this.props.newsblogdata.contact.image + ".webp"} media="(max-width:767px)" type="image/webp" />
                                                        <source srcSet={this.props.newsblogdata.contact.image + ".webp"} media="(max-width:991px)" type="image/webp" />
                                                        <source srcSet={this.props.newsblogdata.contact.image + ".webp"} media="(min-width:992px)" type="image/webp" />
                                                        <source srcSet={this.props.newsblogdata.contact.image + "_sm.png"} media="(max-width:767px)" type="image/png" />
                                                        <source srcSet={this.props.newsblogdata.contact.image + "_md.png"} media="(max-width:991px)" type="image/png" />
                                                        <source srcSet={this.props.newsblogdata.contact.image + ".png"} media="(min-width:992px)" type="image/png" />
                                                        <LazyLoadImage effect="blur" src={this.props.newsblogdata.contact.image + ".png"} width="385" height="641" alt="Digital Marketing, Agency, Facebook Ads- GrowthX" title="Digital Marketing, Agency, Facebook Ads- GrowthX" className="img-fluid" />
                                                    </picture>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" container-fluid pt-100 mt-100" id="Contact">
                                <div className="container">
                                    <div className="subscribe animate__animated wow  animate__fadeInUp"  >
                                        <div className=" text-center  d-table mx-auto">
                                            <h2 className="heading_h2 text-center " dangerouslySetInnerHTML={{ __html: this.props.fields.title }} />
                                            <p className="" dangerouslySetInnerHTML={{ __html: this.props.fields.description }} />
                                        </div>
                                        <form onSubmit={this.handleSubmit} className="col-lg-10 col-md-10 col-sm-12 offset-1 " id="subscribe_form">
                                            <div className="row">
                                                {
                                                    this.state.fields.map((field, index) =>
                                                        <div key={index} className={field.class}>
                                                            <input type={field.type} placeholder={field.placeholder} name={field.name} value={field.value} onChange={(e) => this.handleChange(e, index)} required />
                                                            <div className="errorMsg">{this.state.errors ? this.state.errors[field.name] : ""}</div>
                                                        </div>
                                                    )
                                                }
                                                <div className="col-lg-3 col-md-12 ">
                                                    <button type="submit" value="send" className="submit_btn btn">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </React.Fragment>
                        :
                        <Loader />
                }
            </React.Fragment>
        )
    }
}

export default News_blogs