import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { seoData } from "../Seo";
import Helmet from 'react-helmet';
import Loader from './Loader'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
        title:'',
        responsive:[{
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
  
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
  
          }
        }
      ]
    };
  }

  componentDidMount() {
    this.props.AddAboutHandler();
    seoData.forEach((data) => {
      if (data.page === "about") {
        this.setState({ title: data.title })
        document.getElementsByTagName("META")['title'].content = data.title;
        document.getElementsByTagName("META")['keywords'].content = data.keywords;
        document.getElementsByTagName("META")['description'].content = data.description;
      }
    })
    
    document.body.classList.add("inner_page");
    document.body.classList.add("about_page");
    document.body.classList.add("fmt-0");
  }

  componentWillUnmount() {
    document.body.classList.remove("inner_page");
    document.body.classList.remove("about_page");
    document.body.classList.remove("fmt-0");
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.state.title}</title>
        </Helmet>
        
        {/* <!--1# hero_section	--> */}
        
        <div className="  container-fluid  inner_page_head pt-100 theme_grd">
          <div className="container">
            <div className="row ">
              <div className="breadcrumb_title">
                <h1> What We Do </h1>
                <nav  aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    {/* {
                      this.props.aboutdata.head_list.map((item,index)=>
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
        this.props.aboutdata.length !== 0 ?
        <React.Fragment>
        
        <div className=" container-fluid  mt-100 pb-100 ">
          <div className="container">
            <div className="heading text-center col-lg-8 col-md-10 col-sm-12 d-table mx-auto"  >
              <h2 className="heading_h2 text-center " dangerouslySetInnerHTML={{__html:this.props.aboutdata.main_title}} />
              <p dangerouslySetInnerHTML={{__html:this.props.aboutdata.main_description}} />
            </div>

            <div className="row">
              {
                this.props.aboutdata.about_list.map((item,index)=>
                  <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-12" >
                    <div className={"wwd_col "+ item.div_class }  >
                      <div className="wwd_icon_outer d_center mx-auto">
                        <div className={"wwd_icon_inner "+ item.icon_class +" d_center"}> <i className={item.icon}></i> </div>
                        <span className="ani_dot ani_dot0"></span> <span className="ani_dot ani_dot1"></span> </div>
                      <h5 dangerouslySetInnerHTML={{__html:item.title}} />
                    </div>
                  </div> 
                )
              }
            </div>
          </div>
        </div>

        <div className=" container-fluid our-story pt-100  ">
          <div className="container">
            <div className="row align-items-center">
              <div className=" col-md-6 col-sm-12 img-col">
                <div className="groth_img_bg">
                  <div className="img_shap view">
                  <picture className="d-block fit_img">
                    <source srcSet={this.props.aboutdata.story.image+"_sm.webp"} media="(min-width:991px)" type="image/webp" />
                    <source srcSet={this.props.aboutdata.story.image+".webp"} media="(min-width:992px)" type="image/webp" />
                    <source srcSet={this.props.aboutdata.story.image+"_sm.png"} media="(min-width:991px)" type="image/png" />
                    <source srcSet={this.props.aboutdata.story.image+".png"} media="(min-width:992px)" type="image/png" />
                    <LazyLoadImage effect="blur" src={this.props.aboutdata.story.image+".png"} loading="lazy" width="636" height="732"  alt="Digital Marketing, Agency, Facebook Ads- GrowthX" title="Digital Marketing, Agency, Facebook Ads- GrowthX" className="lazyload fit_img" />
                  </picture>
                  </div>
                </div>
              </div>

              <div className="col-md-6  col-sm-12 conent_col">
                <h2 className="heading_h2 left_sep animate__ wow  animate__fadeInUp animated" dangerouslySetInnerHTML={{ __html:this.props.aboutdata.story.title }} />
                <p className="animate__ wow  animate__fadeInUp animated" dangerouslySetInnerHTML={{__html:this.props.aboutdata.story.content}} />
              </div>
            </div>
          </div>
        </div>


        <div className=" container-fluid our-vission pt-100 pb-100 ">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className=" col-md-6 col-sm-12 img-col">
                <div className="groth_img_bg animate__ wow animate__fadeInLeft">
                  <div className="img_shap view">
                    <picture className="d-block fit_img">
                      <source srcSet={this.props.aboutdata.mission.image+"_sm.webp"} media="(min-width:991px)" type="image/webp" />
                      <source srcSet={this.props.aboutdata.mission.image+".webp"} media="(min-width:992px)" type="image/webp" />
                      <source srcSet={this.props.aboutdata.mission.image+"_sm.jpg"} media="(min-width:991px)" type="image/jpg" />
                      <source srcSet={this.props.aboutdata.mission.image+".jpg"} media="(min-width:992px)" type="image/jpg" />
                      <LazyLoadImage effect="blur" src={this.props.aboutdata.mission.image+".jpg"} loading="lazy" width="636" height="732" alt="Digital Marketing, Agency, Facebook Ads- GrowthX" title="Digital Marketing, Agency, Facebook Ads- GrowthX" className=" lazyload fit_img" />
                    </picture>
                  </div>
                </div>
              </div>

              <div className="col-md-6  col-sm-12 conent_col">
              
              <Slider slidesToShow={1} slidesToScroll={1} dots={true} className="vission_slick">
                    {
                      this.props.aboutdata.mission.list.map((item,index)=>
                      <div key={index}>
                        <h2 className="heading_h2 left_sep " dangerouslySetInnerHTML={{__html:item.title}} />
                        <p className="" dangerouslySetInnerHTML={{__html:item.description}} />
                      </div>
                      )
                    }
              </Slider>
                
                {/* <div className="vission_slick">
                  {
                    this.props.aboutdata.mission.list.map((item,index)=>
                    <div key={index}>
                      <h2 className="heading_h2 left_sep " dangerouslySetInnerHTML={{__html:item.title}} />
                      <p className="" dangerouslySetInnerHTML={{__html:item.description}} />
                    </div>
                    )
                  }
                </div> */}

                <Link to={this.props.aboutdata.mission.contact_btn_link} className="sitebtn_2 mt-2"> {this.props.aboutdata.mission.contact_btn_text} </Link> 
              </div>

            </div>
          </div>
        </div>

        <div className=" container-fluid work_process theme_grd pt-100 pb-100 ">
          <div className="container">
            <div className="heading text-center col-lg-8 col-md-10 col-sm-12 d-table mx-auto animate__animated wow  animate__fadeInUp"  >
              <h2 className="heading_h2 text-center text-white " dangerouslySetInnerHTML={{__html:this.props.aboutdata.working_process.title}} />
              <p className="text-white" dangerouslySetInnerHTML={{__html:this.props.aboutdata.working_process.description}} />
            </div>
            
            <div className="row suttel_svg">
                
            {
              this.props.aboutdata.working_process.list.map((item,index)=>
                <div key={index} className="col-lg-3 col-md-6  col-sm-6 col-12 owp_col animate__ wow  animate__fadeInUp animated" >
                  <div className={"owp_circle "+item.circle_class+" d_center"}>
                    <picture className="d-block">
                      <source srcSet={item.image+".webp"} type="image/webp" />
                      <source srcSet={item.image+".png"} type="image/png" />
                      <LazyLoadImage effect="blur" src={item.image+".png"} loading="lazy" className="lazyload" width="80" height="80" alt="Digital Marketing, Agency, Facebook Ads- GrowthX" title="Digital Marketing, Agency, Facebook Ads- GrowthX" />
                    </picture>
                  </div>
                  <h5 dangerouslySetInnerHTML={{__html:item.content}} />
              </div> 
              )
            }

              
              <span className="suttel_svg_after">
                <picture className="d-block ">
                  <source srcSet={this.props.aboutdata.working_process.rocket_image+".webp"} type="image/webp" />
                  {/* <source srcSet={this.props.aboutdata.working_process.rocket_image+".png"} type="image/png" /> */}
                  <LazyLoadImage effect="blur" src={this.props.aboutdata.working_process.rocket_image+".png"} loading="lazy" className="lazyload" width="68" height="150" alt="Digital Marketing, Agency, Facebook Ads- GrowthX" title="Digital Marketing, Agency, Facebook Ads- GrowthX" class="img-fluid" />
                </picture>
              </span>
            </div>


          </div>
        </div>

        <div className=" container-fluid pt-100 pb-100 ">
          <div className="container">
            <div className="heading text-center col-lg-8 col-md-10 col-sm-12 d-table mx-auto animate__animated wow  animate__fadeInUp"  >
              <h2 className="heading_h2 text-center" dangerouslySetInnerHTML={{__html:this.props.aboutdata.team.title}} />
              <p className="" dangerouslySetInnerHTML={{__html: this.props.aboutdata.team.description }} />
            </div>
            
            <Slider autoplay={true} responsive={this.state.responsive} autoplaySpeed={2000} speed={1000} arrows={true} focusOnSelect={true} slidesToShow={4} slidesToScroll={1} dots={true} className="team_slick">
              {
                this.props.aboutdata.team.list.map((item,index)=>
                <div key={index} className=" col-lg-3 col-md-6 col-sm-12 team_col">
                  <div className="team_div">
                  <a href={item.link}><div className="avtar_circle mx-auto d_center">
                      <picture className="d-block">
                        <source srcSet={item.image+".webp"} type="image/webp" />
                        <source srcSet={item.image+".png"} type="image/png" />
                        <LazyLoadImage effect="blur" src={item.image+".png"} loading="lazy" width="158" height="158" alt="Digital Marketing, Agency, Facebook Ads- GrowthX" title="Digital Marketing, Agency, Facebook Ads- GrowthX" className="img-fluid lazyload" />
                      </picture>
                    </div>
                    <h4>{item.name}</h4>
                    <p dangerouslySetInnerHTML={{__html:item.position}} />
                    </a>
                    {/* <ul className="nav social_links">
                      {
                        item.social_list.map((sitem,i)=>
                          <li key={i} className="social_item"><a href={sitem.link} target="_blank" className={sitem.icon} ></a></li>
                        )
                      }
                    </ul> */}
                  </div>
                </div>
                )
              }
            </Slider>

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

export default About