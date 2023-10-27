import React, { Component } from 'react'
import {Link} from "react-router-dom";
import $ from "jquery";

class Footer extends Component {

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll, true);
        $(".back_to_top ").hide();
    }

    handleScroll = () => {
        let rocket = $('.back_to_top');
        if($(window).scrollTop() > 300){            
            $(".back_to_top ").show();
            $(".back_to_top ").addClass('rocket_down');
        }
        else{
            $(".back_to_top ").hide();
            $(".back_to_top ").removeClass('rocket_down');
            $(".back_to_top ").removeClass("rocket-run");
            setTimeout(function () {
            $('.back_to_top').removeClass('rocket_down');
            }, 300);
        }
      }
    
      backToTop(){
        $('html,body').animate({
            scrollTop: 0
          }, 800);
      }

    render(){
        return(
            <React.Fragment>
                {
                this.props.footerdata.length !== 0 ?
                
                <React.Fragment>
                <a onClick={()=>{this.backToTop()}} id="scroll"  class="back_to_top show" >
                    <span class="rocket_x" style={{"display": "inline-block"}}>
                    {/* <img  src="assets/img/rocket_ani_1.webp" width="60"  alt="" title="" class="img-fluid"/> */}
                        <picture class="d-block">
                            <source srcSet="assets/img/rocket_ani_1.webp" type="image/webp" />
                            <source srcSet="assets/img/rocket_ani_1.png"  type="image/png" />
                            <img src="assets/img/rocket_ani_1.png"  loading="lazy" width="60" alt="Make Your Business More" class="lazyload img-fluid" />
                        </picture>
                        <span class="rocket_fire">
                        <picture class="d-block rocket_fire_before">
                            <source srcSet="assets/img/rocket_fire_before.webp" type="image/webp" />
                            <source srcSet="assets/img/rocket_fire_before.png"  type="image/png" />
                            <img src="assets/img/rocket_fire_before.png"  loading="lazy" width="212" height="117" alt="Digital Marketing Solutions" class=" lazyload img-fluid" />
                        </picture>
                        <picture class="d-block rocket_fire_after">
                            <source srcSet="assets/img/rocket_fire_after.webp" type="image/webp" />
                            <source srcSet="assets/img/rocket_fire_after.png"  type="image/png" />
                            <img src="assets/img/rocket_fire_before.png" loading="lazy" width="212" height="117" alt="Digital Marketing Solutions" class="img-fluid lazyload" />
                        </picture>
                        </span>
                    </span>
                </a>  

<footer className="footer_bg ">
                    <div className="container container_1  ">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 footer_col f-col1 ">
                                <div className="f_logo mb-5">
                                    <picture className="d-block img">
                                        <source srcSet={this.props.footerdata.footer_logo+".webp"} type="image/webp" />
                                        <source srcSet={this.props.footerdata.footer_logo+".png"} type="image/png" />
                                        <img data-src={this.props.footerdata.footer_logo+".png"} loading="lazy" width="193" height="103" alt="Growth-X" title="Growth-X" className="lazyload" />
                                    </picture>

                                </div>
                                
                                <div className="follow_us">
                                    <h5>{ this.props.footerdata.social_media.title }</h5>
                                    <ul className="nav social_links">
                                        {
                                            this.props.footerdata.social_media.icons.map((item,index)=>
                                            <li key={index} className="social_item"><a href={item.link} target="_blank" rel="noreferrer" className={item.iconclass}><i className={item.logo}></i></a></li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 footer_col links_col">
                                <h5>{this.props.footerdata.menu.title}</h5>
                                <ul className="menu_links">
                                    {
                                        this.props.footerdata.menu.list.map((item,index)=>
                                            <li key={index}><Link to={item.link}> {item.text} </Link></li>
                                        )
                                    }
                                </ul>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 footer_col links_col">
                                <h5>{this.props.footerdata.quick_links.title}</h5>
                                <ul className="menu_links">
                                    {
                                        this.props.footerdata.quick_links.list.map((item,index)=>
                                        <li key={index}><a href={item.link}> {item.text} </a></li>
                                        )
                                    }
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 footer_col contact_detail">
                                <h5>{this.props.footerdata.contact.title}</h5>
                                <ul className="">
                                    {
                                        this.props.footerdata.contact.list.map((item,index)=>
                                        <li key={index}><span className={item.icon}></span> 
                                            <a href={item.type+":"+item.text}> {item.text} </a>
                                        </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className=" copyright">
                            <p>{this.props.footerdata.contact.copyright_text}</p>
                            <a href={this.props.footerdata.contact.company_link} className="enterprise" target="_blank" rel="noreferrer"> {this.props.footerdata.contact.company_text} 
                                <img src={this.props.footerdata.contact.company_logo} width="40" height="40" alt={this.props.footerdata.contact.company_logo_alt} /> 
                            </a>
                        </div>
                    </div>
                </footer>

                </React.Fragment>

                : null
            }
            </React.Fragment>
        )
    }
}

export default Footer;