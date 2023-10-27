import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SweetAlert from 'react-bootstrap-sweetalert';
import { seoData } from "../Seo";
import Helmet from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Home extends Component {

    constructor(props) {
        super(props);
        let fields = [];
        if (props.fields.fields.length !== 0) {
            fields = props.fields.fields
        }
        this.state = {
            email: '',
            name: '',
            message: '',
            show: false,
            title: '',
            fields: fields,
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
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    componentDidMount() {
        this.props.AddHomeHandler();
        document.body.classList.add("home");
        seoData.forEach((data) => {
            if (data.page === "home") {
                this.setState({
                    title: data.title
                })
                document.getElementsByTagName("META")['title'].content = data.title;
                document.getElementsByTagName("META")['keywords'].content = data.keywords;
                document.getElementsByTagName("META")['description'].content = data.description;
            }
        })
        setTimeout(() => {
            let app = document.createElement('script')
            app.setAttribute('src', '/assets/js/app.js')
            document.head.appendChild(app);
        }, 1000);
    }
    componentWillUnmount() {
        document.body.classList.remove("home");
    }

    handleChange(event, index) {
        event.preventDefault();
        let fields = [...this.state.fields];
        fields[index] = { ...this.state.fields[index], value: event.target.value }
        this.setState({ fields: fields })
    }

    onConfirm() {
        this.setState({
            show: false
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const isvalid = this.subValidateForm();
        if (isvalid) {
            let fields = [...this.state.fields];
            // console.log(fields);
            let data = new FormData();
            fields.map((item) =>
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

                <Helmet>
                    <title>{this.state.title}</title>
                </Helmet>
                {/* <!--1# hero_section	--> */}
                <div className="container-fluid hero_section pt-100 " id="particles-js">
                    <div className="container">
                        <div className="row ">
                            {
                                this.props.homedata.length !== 0 ?
                                    <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 content_col">
                                        <h1 dangerouslySetInnerHTML={{ __html: this.props.homedata.main_section.title }} />
                                        <h2 id="app"> </h2>
                                        <Link to={this.props.homedata.main_section.btn_link} target="_blank" className="contact_btn"> {this.props.homedata.main_section.btn_text} </Link>
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                    {/* Rocket */}
                    <span className="rocket_x">
                        <picture className="d-block">
                            <source srcSet="assets/img/rocket_ani_1.webp" type="image/webp" />
                            <source srcSet="assets/img/rocket_ani_1.png" type="image/png" />
                            <LazyLoadImage effect="blur" src="assets/img/rocket_ani_1.png" width="215" height="475" alt="Digital Marketing, Agency, Facebook Ads- GrowthX" className="img-fluid" />
                        </picture>
                        <span className="rocket_fire">
                            <picture className="d-block rocket_fire_before">
                                <source srcSet="assets/img/rocket_fire_before.webp" type="image/webp" />
                                <source srcSet="assets/img/rocket_fire_before.png" type="image/png" />
                                <img src="assets/img/rocket_fire_before.png" width="212" height="117" alt="Digital Marketing Solutions" className="img-fluid" />
                            </picture>
                            <picture className="d-block rocket_fire_after">
                                <source srcSet="assets/img/rocket_fire_after.webp" type="image/webp" />
                                <source srcSet="assets/img/rocket_fire_after.png" type="image/png" />
                                <img src="assets/img/rocket_fire_before.png" width="212" height="117" alt="Digital Marketing Solutions" className="img-fluid" />
                            </picture>
                        </span>
                    </span>
                    {/* curve */}
                    <span className="banner_curve">
                        <picture className="d-block">
                            <source srcSet="assets/img/Banner_shape_sm.webp " media="(max-width:767px)" type="image/webp" />
                            <source srcSet="assets/img/Banner_shape_md.webp" media="(max-width:991px)" type="image/webp" />
                            <source srcSet="assets/img/Banner_shape.webp" media="(min-width:992px)" type="image/webp" />
                            <source srcSet="assets/img/Banner_shape_sm.png" media="(max-width:767px)" type="image/png" />
                            <source srcSet="assets/img/Banner_shape_md.png" media="(max-width:991px)" type="image/png" />
                            <source srcSet="assets/img/Banner_shape.png" media="(min-width:992px)" type="image/png" />
                            <img src="assets/img/Banner_shape.png" width="1920" height="440" alt="Digital Marketing Solutions" className="img-fluid" />
                        </picture>
                    </span>

                </div>

                {/* <!--	#2--> */}
                <div className="container-fluid wwd_section  pb-100 ">
                    <div className="container">
                        <div className="row align-items-center ">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                {
                                    this.props.homedata.length !== 0 ?
                                        <div className="row">
                                            {
                                                this.props.homedata.what_we_do.steps.map((item, index) =>
                                                    <div key={index} className="col-sm-6 col-12" >
                                                        <div className={"wwd_col " + item.div_class + " animate__animated wow  animate__fadeInUp"}  >
                                                            <div className="wwd_icon_outer d_center mx-auto">
                                                                <div className={"wwd_icon_inner " + item.color_class + " d_center"}><i className={item.icon}></i> </div>
                                                                <span className="ani_dot ani_dot0"></span> <span className="ani_dot ani_dot1"></span> </div>
                                                            <h5 dangerouslySetInnerHTML={{ __html: item.title }} />
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        : null
                                }
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12 conent_col">
                                {
                                    this.props.homedata.length !== 0 ?
                                        <React.Fragment>
                                            <h2 className="heading_h2 left_sep animate__animated wow  animate__fadeInUp" dangerouslySetInnerHTML={{ __html: this.props.homedata.what_we_do.title }} />
                                            <p className="" dangerouslySetInnerHTML={{ __html: this.props.homedata.what_we_do.description }} />
                                            <p className=""><strong dangerouslySetInnerHTML={{ __html: this.props.homedata.what_we_do.service_title }} />
                                                <ol>
                                                    {
                                                        this.props.homedata.what_we_do.service_steps.map((item, index) =>
                                                            <li key={index}>{item}</li>
                                                        )
                                                    }

                                                </ol>
                                            </p>
                                            <p className="" dangerouslySetInnerHTML={{ __html: this.props.homedata.what_we_do.othor_services }} />
                                        </React.Fragment>
                                        : null
                                }
                            </div>

                        </div>
                    </div>
                </div>

                {
                    this.props.homedata.length !== 0 ?
                        <React.Fragment>

                            {/* <!--  #3 about--> */}
                            <div className=" container-fluid about_section mt-100 mb-100 pt-100 pb-100 " id="What_We_Do">
                                <div className="container">
                                    <div className="row align-items-center ">
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <h2 className="heading_h2 left_sep animate__animated wow  animate__fadeInUp"  >Make Your Business More<br />
                                                <span className="g_secondary">Competitive and Sustainable</span> </h2>
                                            {/* <!-- <p  className="animate__animated wow  animate__fadeInUp"></p> --> */}
                                            <ul className="list-unstyled">
                                                {
                                                    this.props.homedata.business_section.list.map((item, index) =>
                                                        <li key={index}><span className=""><i className="fas fa-check"></i></span> {item} </li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 text-center animate__animated wow  animate__fadeInUp">

                                            <picture className="d-block">
                                                <source srcSet={this.props.homedata.business_section.business_image + "_sm.webp"} media="(max-width:767px)" type="image/webp" />
                                                <source srcSet={this.props.homedata.business_section.business_image + "_md.webp"} media="(max-width:991px)" type="image/webp" />
                                                <source srcSet={this.props.homedata.business_section.business_image + ".webp"} media="(min-width:992px)" type="image/webp" />
                                                <source srcSet={this.props.homedata.business_section.business_image + "_sm.png"} media="(max-width:767px)" type="image/png" />
                                                <source srcSet={this.props.homedata.business_section.business_image + "_md.png"} media="(max-width:991px)" type="image/png" />
                                                <source srcSet={this.props.homedata.business_section.business_image + ".png"} media="(min-width:992px)" type="image/png" />
                                                <LazyLoadImage effect="blur" src={this.props.homedata.business_section.business_image + ".png"} loading="lazy" width="636" height="463" alt="Digital Marketing, Agency, Facebook Ads- GrowthX" className=" lazyload img-fluid" />
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- #4 services--> */}
                            <div className=" container-fluid services_section   pt-100 pb-100 " id="Services" >
                                <div className="container">
                                    <div className="heading text-center col-lg-8 col-md-10 col-sm-12 d-table mx-auto animate__animated wow  animate__fadeInUp"  >
                                        <h2 className="heading_h2 text-center " dangerouslySetInnerHTML={{ __html: this.props.homedata.services.title }} />
                                        <p>{this.props.homedata.services.description}</p>
                                    </div>
                                    <div className="row services_row ">
                                        <div className="col-lg-4 col-md-12 col-sm-12 order_0 left_col">
                                            <div className="row">
                                                {
                                                    this.props.homedata.services.service_list1.map((item, index) =>
                                                        <div key={index} className="col-12 sr_col animate__animated wow  animate__fadeInUp"  >
                                                            <div className={"sr_icon " + item.div_class + " d_center"}>
                                                                <i className={item.icon}></i>
                                                            </div>
                                                            <div className="content_col">
                                                                <h5> {item.title} </h5>
                                                                <p>{item.description}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-12 col-sm-12 logo_ani_col order_1 d_center ">
                                            <div className="logo_animation d_center ">
                                                <div className="logo_bg d_center">
                                                    <picture className="d-block img">
                                                        <source srcSet={this.props.homedata.services.center_img + ".webp"} type="image/webp" />
                                                        <source srcSet={this.props.homedata.services.center_img + ".png"} type="image/png" />
                                                        <LazyLoadImage effect="blur" src={this.props.homedata.services.center_img + ".png"} loading="lazy" width="80" height="79" alt="Growth-X" title="Growth-X" className="lazyload" />
                                                    </picture>
                                                </div>
                                                <span className="ani_dot ani_dot0"></span> <span className="ani_dot ani_dot1"></span>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-12 col-sm-12 order_2 right_col">

                                            {
                                                this.props.homedata.services.service_list2.map((item, index) =>
                                                    <div key={index} className="col-12 sr_col animate__animated wow  animate__fadeInUp"  >
                                                        <div className={"sr_icon " + item.div_class + " d_center"}>
                                                            <i className={item.icon}></i>
                                                        </div>
                                                        <div className="content_col">
                                                            <h5> {item.title} </h5>
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* <!-- #5	experience--> */}
                            <div className=" container-fluid experience_section mt-100 mb-100  pt-100 pb-100" id="experience">

                                <div className="container">
                                    {/* <!-- <span className="map-texture">
 	<picture className="d-block">
			  <source srcSet="assets/img/map_taxture.webp"  type="image/webp">
			  <source srcSet="assets/img/map_taxture.png"  type="image/png">
			  <img src="assets/img/map_taxture.png"  width="1320" height="469" alt="Growth-X" title="Growth-X" className="img-fluid">
		  </picture>
	</span> --> */}
                                    <div className="heading text-center col-lg-8 col-md-10 col-sm-12 d-table mx-auto animate__animated wow  animate__fadeInUp"  >
                                        <h2 className="heading_h2 text-center " dangerouslySetInnerHTML={{ __html: this.props.homedata.experience.title }} />
                                        <p>{this.props.homedata.experience.description}</p>
                                    </div>

                                    <div className="row" id="counter_row">
                                        {
                                            this.props.homedata.experience.list.map((item, index) =>
                                                <div key={index} className="col-md-3  col-sm-6 col-12 counter_col animate__animated wow  animate__fadeInUp"  >
                                                    <div className={"counter_circle " + item.color_class + " d_center"} > <span className="counter" > {item.value} </span></div>
                                                    <h4>{item.title}</h4>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>

                            {/* <!-- #6 plans_section	--> */}

                            <div className=" container-fluid plans_section  pt-100 pb-100 " id="Plans" >
                                <div className="container">
                                    <div className="heading text-center col-lg-8 col-md-10 col-sm-12 d-table mx-auto animate__animated wow  animate__fadeInUp"  >
                                        <h2 className="heading_h2 text-center " dangerouslySetInnerHTML={{ __html: this.props.homedata.pricing.title }} />
                                        <p>{this.props.homedata.pricing.description}</p>
                                    </div>
                                    <div className="row  ">
                                        <div className="tab-content animate__animated wow  animate__fadeInUp" id="myTabContent"  >
                                            <div className="tab-pane fade show active " id="monthly" role="tabpanel" aria-labelledby="monthly-tab">

                                                <article>
                                                    <ul className="table_nav">
                                                        {
                                                            this.props.homedata.pricing.tab_list.map((item, index) =>
                                                                <li key={index}>
                                                                    <button className={item.class}> {item.value} </button>
                                                                </li>
                                                            )
                                                        }
                                                    </ul>
                                                    <table className="plan_table">
                                                        <thead>
                                                            <tr>
                                                                {
                                                                    this.props.homedata.pricing.table_data.head.map((item, index) =>
                                                                        <th key={index} className={item.class}>{item.value}</th>
                                                                    )
                                                                }
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="plan_title_bar">
                                                                {
                                                                    this.props.homedata.pricing.table_data.plan_title_bar.map((item, index) =>
                                                                        item.class !== '' ?
                                                                            <td key={index}><span className={item.class}>{item.value}</span></td>
                                                                            :
                                                                            <td key={index}>{item.value}</td>
                                                                    )
                                                                }

                                                            </tr>

                                                            <tr className="choosable ">
                                                                {
                                                                    this.props.homedata.pricing.table_data.row_data1.map((item, index) =>
                                                                        item.class !== '' ?
                                                                            <td key={index}><span className={item.class}>{item.value}</span></td>
                                                                            :
                                                                            <td key={index}>{item.value}</td>
                                                                    )
                                                                }
                                                            </tr>

                                                            <tr className="choosable ">
                                                                {
                                                                    this.props.homedata.pricing.table_data.row_data2.map((item, index) =>
                                                                        item.class !== '' ?
                                                                            <td key={index}><span className={item.class}>{item.value}</span></td>
                                                                            :
                                                                            <td key={index}>{item.value}</td>
                                                                    )
                                                                }
                                                            </tr>

                                                            <tr className="choosable ">
                                                                {
                                                                    this.props.homedata.pricing.table_data.row_data3.map((item, index) =>
                                                                        item.class !== '' ?
                                                                            <td key={index}><span className={item.class}>{item.value}</span></td>
                                                                            :
                                                                            <td key={index}>{item.value}</td>
                                                                    )
                                                                }
                                                            </tr>

                                                            <tr className="choosable ">
                                                                {
                                                                    this.props.homedata.pricing.table_data.row_data4.map((item, index) =>
                                                                        item.class !== '' ?
                                                                            <td key={index}><span className={item.class}>{item.value}</span></td>
                                                                            :
                                                                            <td key={index}>{item.value}</td>
                                                                    )
                                                                }
                                                            </tr>

                                                            <tr className="choosable ">
                                                                {
                                                                    this.props.homedata.pricing.table_data.row_data5.map((item, index) =>
                                                                        item.class !== '' ?
                                                                            <td key={index}><span className={item.class}>{item.value}</span></td>
                                                                            :
                                                                            <td key={index}>{item.value}</td>
                                                                    )
                                                                }
                                                            </tr>

                                                            <tr className="choosable ">
                                                                {
                                                                    this.props.homedata.pricing.table_data.row_data6.map((item, index) =>
                                                                        item.class !== '' ?
                                                                            <td key={index}><span className={item.class} dangerouslySetInnerHTML={{ __html: item.value }} /></td>
                                                                            :
                                                                            <td key={index} dangerouslySetInnerHTML={{ __html: item.value }} />
                                                                    )
                                                                }
                                                            </tr>

                                                            <tr className="choosable ">
                                                                {
                                                                    this.props.homedata.pricing.table_data.row_data7.map((item, index) =>
                                                                        item.class !== '' ?
                                                                            <td key={index}><span className={item.class} dangerouslySetInnerHTML={{ __html: item.value }} /></td>
                                                                            :
                                                                            <td key={index} dangerouslySetInnerHTML={{ __html: item.value }} />
                                                                    )
                                                                }
                                                            </tr>

                                                        </tbody>
                                                        <tfoot><tr>
                                                            <tr className="choosable ">
                                                                {
                                                                    this.props.homedata.pricing.table_data.footer.map((item, index) =>
                                                                        item.class !== '' ?
                                                                            <td key={index}><a href={item.link} className={item.class}> {item.value}  </a></td>
                                                                            :
                                                                            <td key={index}>{item.value}</td>
                                                                    )
                                                                }
                                                            </tr>
                                                        </tr></tfoot>
                                                    </table>
                                                </article>
                                            </div>

                                        </div>

                                        <div className="g_note animate__animated wow  animate__fadeInUp">
                                            <h6> {this.props.homedata.social_media.description} </h6>
                                            <ul className="social_marketing_on ">
                                                {
                                                    this.props.homedata.social_media.list.map((item, index) =>
                                                        <a href={item.link}><li key={index} className={item.class}><i className={item.icon}></i>{item.text}</li></a>
                                                    )
                                                }
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- 7# blog--> */}
                            <div className=" container-fluid  theme_grd  news_n_blog pt-100 mb-100" id="Newsnblogs" > <span className="props prop_1"><i className="icofont-plus icofont-2x"></i></span> <span className="props prop_2"><i className="icofont-brand-tata-indicom icofont-2x"></i></span> <span className="props prop_3"><i className="icofont-plus icofont-2x"></i></span> <span className="props prop_4"><i className="icofont-brand-tata-indicom icofont-2x"></i></span>
                                <div className="container">
                                    <div className="heading text-center col-lg-8 col-md-10 col-sm-12 d-table mx-auto animate__animated wow  animate__fadeInUp"   >
                                        <h2 className="heading_h2 text-center text-white " dangerouslySetInnerHTML={{ __html: this.props.homedata.explore_buisness.title }} />
                                        <p className="text-white"  >{this.props.homedata.explore_buisness.description}</p>
                                    </div>
                                    <div className="row">
                                        <Slider autoplay={true} responsive={this.state.responsive} autoplaySpeed={2000} speed={1000} arrows={true} focusOnSelect={true} slidesToShow={3} slidesToScroll={1} dots={false} className="blog-slick">
                                            {
                                                this.props.homedata.explore_buisness.blog.map((item, index) =>
                                                    <div key={index} className="blog-col">
                                                        <div className="blog_thumbnail">
                                                            <picture className="d-block">
                                                                <source srcSet={item.image + "_sm.webp"} media="(max-width:767px)" type="image/webp" />
                                                                <source srcSet={item.image + "_md.webp"} media="(max-width:991px)" type="image/webp" />
                                                                <source srcSet={item.image + ".webp"} media="(min-width:992px)" type="image/webp" />
                                                                <source srcSet={item.image + "_sm.png"} media="(max-width:767px)" type="image/png" />
                                                                <source srcSet={item.image + "_md.png"} media="(max-width:991px)" type="image/png" />
                                                                <source srcSet={item.image + ".png"} media="(min-width:992px)" type="image/png" />
                                                                <img data-src={item.image + ".png"} loading="lazy" width="408" height="510" alt="Explore Our Business" title="blog" className="lazyload img-fluid" />
                                                            </picture>
                                                        </div>
                                                        <div className="blog_content">
                                                            <h5> {item.content} </h5>
                                                        </div>
                                                    </div>
                                                )
                                            }

                                        </Slider>
                                    </div>
                                </div>
                            </div>


                            {/* <!-- #8	 testimonial--> */}
                            <div className=" container-fluid testimonial_section mt-100" >
                                <div className="container">
                                    <div className="testimonial_container js-tilt pt-100 pb-100 " >
                                        <div className="heading text-center  d-table mx-auto animate__animated wow  animate__fadeInUp"     >
                                            <h2 className="heading_h2 text-center " dangerouslySetInnerHTML={{ __html: this.props.homedata.client.title }} />
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-10 col-10 offset-1">
                                            <Slider autoplay={true} responsive={this.state.responsive} autoplaySpeed={2000} speed={1000} arrows={true} focusOnSelect={true} slidesToShow={1} slidesToScroll={1} dots={false} className="testi_slick ">
                                                {
                                                    this.props.homedata.client.testimonial.map((item, index) =>
                                                        <div key={index}>
                                                            <span className="icofont-quote-left"></span>
                                                            <p className="client_says">{item.description}</p>
                                                            <h5 className="client_name">{item.name}</h5>
                                                            <h6 className="client_p">{item.position}</h6>
                                                            <span className="icofont-quote-right"></span>
                                                        </div>
                                                    )
                                                }
                                            </Slider>
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
                                        <form className="col-lg-10 col-md-10 col-sm-12 offset-1 " id="subscribe_form" onSubmit={this.handleSubmit}>
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
                                        <SweetAlert success title="Good job!" confirmBtnBsStyle="danger" show={this.state.show} onConfirm={this.onConfirm}>
                                            {this.state.message}
                                        </SweetAlert>
                                        {/* <SweetAlert title="Here's a message!" onConfirm={this.onConfirm} onCancel={this.onCancel} show={this.state.show} /> */}

                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                        :
                        null
                }
            </React.Fragment>
        )
    }
}

export default Home