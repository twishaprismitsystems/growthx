import React, { Component } from 'react'
import axios from 'axios'
import SweetAlert from 'react-bootstrap-sweetalert';
import { seoData } from "../Seo";
import Helmet from 'react-helmet';
import Loader from './Loader'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        let fields = [];
        let sfields = [];
        if (props.fields.fields.length !== 0) {
            sfields = props.fields.fields
        }
        if (props.contact_fields.contact_fields !== 0) {
            fields = props.contact_fields.contact_fields
        }
        this.state = {
            email: '',
            name: '',
            message: '',
            contact_name: '',
            contact_email: '',
            contact_Mobile_No: '',
            contact_message: '',
            mail_message: '',
            show: false,
            contact_success: false,
            title: '',
            fields: fields,
            sfields: sfields,
            responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,

                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    dots: true,

                }
            }
            ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlecontactSubmit = this.handlecontactSubmit.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
        this.onContactConfirm = this.onContactConfirm.bind(this);

    }

    componentDidMount() {
        this.props.AddContactHandler();
        document.body.classList.add("inner_page");
        document.body.classList.add("contact_page");
        seoData.forEach((data) => {
            if (data.page === "contact") {
                this.setState({ title: data.title })
                document.getElementsByTagName("META")['title'].content = data.title;
                document.getElementsByTagName("META")['keywords'].content = data.keywords;
                document.getElementsByTagName("META")['description'].content = data.description;
            }
        })
    }

    componentWillUnmount() {
        document.body.classList.remove("inner_page");
        document.body.classList.remove("contact_page");
    }

    onConfirm() {
        this.setState({
            show: false
        });
    }

    onContactConfirm() {
        this.setState({
            contact_success: false
        });
    }

    handleChange(event, index) {
        event.preventDefault();
        const re = /^[0-9A-Za-z@..\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            let fields = [...this.state.sfields];
            fields[index] = { ...this.state.sfields[index], value: event.target.value }
            this.setState({ sfields: fields })
        }
    }

    handleContactChange(event, index) {
        event.preventDefault();
        const re = /^[0-9A-Za-z@..\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            let fields = [...this.state.fields];
            fields[index] = { ...this.state.fields[index], value: event.target.value }
            this.setState({ fields: fields })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const isvalid = this.subValidateForm();
        if (isvalid) {
            let fields = [...this.state.sfields];
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
        let fields = [...this.state.sfields];
        console.log(fields[0]['value']);
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

    handlecontactSubmit(event) {
        event.preventDefault();
        const isvalid = this.validateForm();
        if (isvalid) {
            let fields = [...this.state.fields];
            // console.log(fields);
            let data = new FormData();
            fields.map((item, index) =>
                data.append(item.name, item.value)
            )
            const url = "/control/email.php";
            axios.post(url, data).then(response => {
                //console.log(response);
                this.setState({
                    mail_message: response.data,
                    contact_success: true
                });
            }).catch(error => {
                console.log(error);
            })
        }
    }

    validateForm() {

        let errors = {};
        let formIsValid = true;
        let fields = [...this.state.fields];
        //console.log(fields[0]['value']);
        if (!fields[0]['value']) {
            formIsValid = false;
            errors["contact_name"] = "*Please enter your username.";
        }

        if (typeof fields[0]['value'] !== "undefined") {
            if (!fields[0]['value'].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["contact_name"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields[2]['value']) {
            formIsValid = false;
            errors["contact_email"] = "*Please enter your email-ID.";
        }

        if (typeof fields[2]['value'] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields[2]['value'])) {
                formIsValid = false;
                errors["contact_email"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields[1]['value']) {
            formIsValid = false;
            errors["contact_Mobile_No"] = "*Please enter your mobile no.";
        }

        if (typeof fields[1]['value'] !== "undefined") {
            if (!fields[1]['value'].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["contact_Mobile_No"] = "*Please enter valid 10 digit mobile no.";
            }
        }

        if (!fields[3]['value']) {
            formIsValid = false;
            errors["contact_message"] = "*Please enter your message.";
        }

        if (typeof fields[3]['value'] !== "undefined") {
            if (!fields[3]['value'].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["contact_message"] = "*Please enter alphabet characters only.";
            }
        }

        this.setState({
            errors: errors
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
                <div className="  container-fluid  inner_page_head pt-100 theme_grd" id="particles-js">
                    <div className="container">
                        <div className="row ">
                            <div className="breadcrumb_title">
                                <h1> Contact Us </h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        {/* {
                                        this.props.contactdata.head_list.map((item,index)=>
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
                    this.props.contactdata.length !== 0 ?
                        <React.Fragment>
                            <div className=" container-fluid get_in_touch mt-100 pb-100">
                                <div className="container">
                                    <div className="heading text-center col-lg-8 col-md-10 col-sm-12 d-table mx-auto"  >
                                        <h2 className="heading_h2 text-center" dangerouslySetInnerHTML={{ __html: this.props.contactdata.main_title }} />
                                    </div>
                                    <div className="row">
                                        {
                                            this.props.contactdata.contact_list.map((item, index) =>
                                                <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-12" >
                                                    
                                                    <div className={"wwd_col " + item.div_class}>
                                                    <a href={item.link}>
                                                        <div className="wwd_icon_outer d_center mx-auto">
                                                            <div className={"wwd_icon_inner " + item.icon_class + " d_center"}>
                                                                <i className={item.icon}></i>
                                                            </div>
                                                            <span className="ani_dot ani_dot0"></span> <span className="ani_dot ani_dot1"></span> </div>
                                                        <h5> {item.title} </h5>
                                                         <p> {item.content} </p> </a>
                                                    </div>
                                                   
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className=" container-fluid our-story pt-100 pb-100 ">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className=" col-md-6 col-sm-12 img-col">
                                            <div className="groth_img_bg">
                                                <div className="img_shap view">
                                                    <LazyLoadImage effect="blur" src={this.props.contactdata.message.image + ".jpg"} alt="groth_img" title="groth_img" className=" fit_img img-fluid" />
                                                    <picture className="d-block">
                                                        <source srcSet={this.props.contactdata.message.image + "_sm.webp"} media="(max-width:991px)" type="image/webp" />
                                                        <source srcSet={this.props.contactdata.message.image + ".webp"} media="(max-width:992px)" type="image/webp" />
                                                        <source srcSet={this.props.contactdata.message.image + "_sm.jpg"} media="(max-width:991px)" type="image/png" />
                                                        <source srcSet={this.props.contactdata.message.image + ".jpg"} media="(max-width:992px)" type="image/png" />
                                                        <LazyLoadImage effect="blur" src={this.props.contactdata.message.image + ".jpg"} width="636" height="730" alt="Digital Marketing, Agency, Facebook Ads- GrowthX" title="Digital Marketing, Agency, Facebook Ads- GrowthX" className="fit_img img-fluid" />
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6  col-sm-12 conent_col">
                                            <h2 className="heading_h2 left_sep animate__ wow  animate__fadeInUp animated">Give A <span className="g_secondary">Message</span></h2>
                                            <form className="contact_form" onSubmit={this.handlecontactSubmit}>
                                                <div className="row">
                                                    {
                                                        this.state.fields.map((item, index) =>
                                                            item.type === "text" || item.type === "email" ?
                                                                <div key={index} className="col-12 form_field">
                                                                    <input type={item.type} placeholder={item.placeholder} name={item.name} value={item.value} onChange={(e) => this.handleContactChange(e, index)} required />
                                                                    <div className="errorMsg">{this.state.errors ? this.state.errors[item.name] : ""}</div>
                                                                </div>
                                                                :
                                                                <div key={index} className="col-12 form_field">
                                                                    <textarea type={item.type} rows="10" placeholder={item.placeholder} name={item.name} value={item.value} onChange={(e) => this.handleContactChange(e, index)} maxLength="140"></textarea>
                                                                    <div className="errorMsg">{this.state.errors ? this.state.errors[item.name] : ""}</div>
                                                                </div>
                                                        )
                                                    }
                                                    <div className="col-12 ">
                                                        <button type="submit" className="submit_btn" value="send" > {this.props.contactdata.message.btn_text} </button>
                                                    </div>

                                                </div>
                                            </form>
                                            <SweetAlert success title="Good job!" show={this.state.contact_success} onConfirm={this.onContactConfirm}>
                                                {this.state.mail_message}
                                            </SweetAlert>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--follow us on 	--> */}
                            <div className="container-fluid follow_us mt-100 pb-100 ">
                                <div className="container">
                                    <h2 className="heading_h2 text-center  animate__animated wow  animate__fadeInUp" dangerouslySetInnerHTML={{ __html: this.props.contactdata.follow_us.title }} />
                                    <Slider responsive={this.state.responsive} autoplay={true} autoplaySpeed={2000} speed={1000} arrows={false} focusOnSelect={true} slidesToShow={4} slidesToScroll={1} dots={false} className="social_slick">
                                        {
                                            this.props.contactdata.follow_us.list.map((item, index) =>
                                                <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                    <a href={item.link} target="_blank" rel="noreferrer" className={"wwd_col " + item.class + " animate__animated wow  animate__fadeInUp"}>
                                                        <div className="wwd_icon_outer d_center mx-auto">
                                                            <div className={"wwd_icon_inner " + item.circle_class + " d_center"}> <i className={item.icon}></i></div>
                                                            <span className="ani_dot ani_dot0"></span> <span className="ani_dot ani_dot1"></span>
                                                        </div>
                                                        <h5>{item.title}</h5>
                                                    </a>
                                                </div>
                                            )
                                        }
                                    </Slider>
                                </div>
                            </div>

                            <div className="container-fluid video_meeting mt-100">
                                <div className="container">
                                    <div className="heading text-center col-lg-8 col-md-10 col-sm-12 d-table mx-auto animate__animated wow  animate__fadeInUp"  >
                                        <h2 className="heading_h2 text-center " dangerouslySetInnerHTML={{ __html: this.props.contactdata.follow_us.title }} />
                                        <p>{this.props.contactdata.follow_us.description}</p>
                                    </div>

                                    <div className="row justify-content-center">
                                        {
                                            this.props.contactdata.meet_on.list.map((item, index) =>
                                                <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                    <a href={item.link} target="_blank" rel="noreferrer" className="wwd_col wwd_red animate__animated wow  animate__fadeInUp"  >
                                                        <div className="wwd_icon_outer d_center mx-auto">
                                                            <div className="wwd_icon_inner  d_center">
                                                                <picture className="d-block">
                                                                    <source srcSet={item.image + ".webp"} type="image/webp" />
                                                                    <source srcSet={item.image + ".png"} type="image/png" />
                                                                    <LazyLoadImage effect="blur" src={item.image + ".png"} width="60" height="60" alt="Digital Marketing, Agency, Facebook Ads- GrowthX" className="" />
                                                                </picture>
                                                            </div>
                                                            <span className="ani_dot ani_dot0"></span> <span className="ani_dot ani_dot1"></span> </div>
                                                        <h5> {item.title} </h5>
                                                    </a>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="col-xl-6 col-lg-8 col-md-8 col-10 d-table mx-auto">
                                        <LazyLoadImage effect="blur" src={this.props.contactdata.remote_img} loading="lazy" alt="" title="" className="lazyload d-table mx-auto img-fluid" />
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
                                                    this.state.sfields.map((field, index) =>
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
                                        <SweetAlert success title="Good job!" show={this.state.show} onConfirm={this.onConfirm}>
                                            {this.state.message}
                                        </SweetAlert>
                                        {/* <div className="text-center"><h3> {this.state.message}</h3></div> */}
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

export default Contact